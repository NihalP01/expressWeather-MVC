const express = require('express')
const app = express()
const router = require('./src/routes')
const path = require('path')


const bodyParser = require('body-parser');

// app.use(express.static('public'))

const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.set("views", "views")
app.set("view engine", "hbs")

// app.get('/', (req, res)=>{
//     res.render('index')
// })

app.use('/', router);

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`LoL, running at ${port}`)
});
