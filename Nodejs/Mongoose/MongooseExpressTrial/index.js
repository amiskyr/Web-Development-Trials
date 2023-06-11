const express = require('express')
const app = express()
const path = require('path')
const Product = require('./models/product')
const mongoose = require('mongoose');

const macURI = 'mongodb://root:example@127.0.0.1:27017'
const winURI = 'mongodb://127.0.0.1:27017/farmStand'

// setup mongoose connection
mongoose.connect(winURI)
    .then((data) => {
        console.log('---mongo connection open---\n')
        // console.log(data)
    })
    .catch(err => {
        console.log('---mongo connection failed---\n')
        console.log(err)
    });

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('index', { products })
})

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})