const API_KEY = "84b9a521d056278acdbdcda36cc1b390"
const axios = require('axios')
const Weather = require('../model/Model')

exports.renderLoginPage = (req, res) => {
    res.render('login')
}

exports.renderPostReq = (req, res) => {
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    
    const weather = new Weather(city)
    weather.checkUserInput()

    if(weather.error.length){
        res.render('login', {
            error: weather.error.toString()
        })
    }else{
        axios.get(url).then((response) => {
            const temp = response.data.main.temp
            res.render('login', {
                temp: `It is currently ${temp} in ${city}`
            })
        }).catch((error) => {
            const notFound = error.response.data.message
            res.render('login', {
                error: `${notFound} with name ${city}`
            })
        })
    }
}