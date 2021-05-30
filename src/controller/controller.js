const API_KEY = "84b9a521d056278acdbdcda36cc1b390"
const axios = require('axios')
const Weather = require('../model/Model')

exports.renderHomePage = (req, res) => {
    res.render('index', { title: 'Weather', layout: 'layouts/main' })
}

exports.renderPostReq = (req, res) => {
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    
    const weather = new Weather(city)
    weather.checkUserInput()

    if(weather.error.length){
        res.render('index', {
            error: weather.error.toString(),
            layout: 'layouts/main'
        })
    }else{
        axios.get(url).then((response) => {
            const result = response.data;
            const date = new Date()
            console.log(response)
            res.render('weather', {
                temp: result.main.temp, 
                city: city,
                date: `${date.getUTCDate()}/${date.getUTCMonth()}/${date.getUTCFullYear()}`,
                humidity: `Humidity: ${result.main.humidity}% with wind speed of: ${(result.wind.speed).toFixed(2)} KMph`, 
                layout: 'layouts/main'
            })
        }).catch((error) => {
            const notFound = error.response.data.message
            res.render('index', {
                error: `${notFound} with name ${city}`,
                layout: 'layouts/main'
            })
        })
    }
}
