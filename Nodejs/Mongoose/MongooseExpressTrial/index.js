const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const Product = require('./models/product')
const mongoose = require('mongoose');

const macURI = 'mongodb://root:example@127.0.0.1:27017'
const winURI = 'mongodb://127.0.0.1:27017/farmStand'
const categories = ['fruit', 'vegetable', 'dairy']

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

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const productFound = await Product.findById(id)
    res.render('products/show', { productFound })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const foundProduct = await Product.findById(id)
    res.render('products/edit', { foundProduct, categories })
})

app.put('/products/:id', async (req, res) => {
    console.log(req.body)
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${updatedProduct._id}`)
})

app.listen(3000, () => {
    console.log('App is listening on port 3000')
})