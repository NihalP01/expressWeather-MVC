const express = require('express')
const app = express()
const router = require('./src/routes')
const bodyParser = require('body-parser'); // middleware
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// app.get('/', (req, res) =>{
//     res.send("hbujfb")
// });
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))

app.set("views", "views")
app.set("view engine", "hbs")

// app.get('/', (req, res)=>{
//     res.render('index')
// })

app.use('/api', router);

const port = process.env.port || 5000

app.listen(port, () => {
    console.log(`Lol running at ${port}`)
});