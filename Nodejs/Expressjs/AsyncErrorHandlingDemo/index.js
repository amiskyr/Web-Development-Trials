const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')
const Product = require('./models/product')
const mongoose = require('mongoose');
const AppError = require('./AppError')

const macURI = 'mongodb://root:example@127.0.0.1:27017'
const winURI = 'mongodb://127.0.0.1:27017/farmStand'
const categories = ['fruit', 'vegetable', 'dairy']

// setup mongoose connection
mongoose.connect(macURI)
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

// Async utility
function wrapAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

// Index listing all products
app.get('/products', wrapAsync(async (req, res, next) => {
    const { category } = req.query
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    }
    else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
}))

// Add a new product use GET request
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

// Submit the form of new product details to be added using POST request
app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body)
    await newProduct.save()
    // console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`)
}))

// Product details using _id in DB
app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const productFound = await Product.findById(id)

    if (!productFound) {
        // throw new AppError('Product not found', 404)    // This will not work in case of sync functions and their errors
        throw new AppError('Product not found', 404)    // This will trigger the error handling middleware and work accordingly
    }
    res.render('products/show', { productFound })
}))

// Edit product details by and opening the edit page on GET request
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const foundProduct = await Product.findById(id)

    if (!foundProduct) {
        throw new AppError('Product not found', 404)    // This will trigger the error handling middleware and work accordingly
    }
    res.render('products/edit', { foundProduct, categories })
}))

// Submission of the updated product details form using PUT request (method-override) to update in DB
app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
    res.redirect(`/products/${updatedProduct._id}`)
}))

// Deletion of the product using DELETE request (method-override) from DB
app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params
    const deletedProduct = await Product.findByIdAndDelete(id)
    res.redirect('/products')
}))

const handleValidationError = err => {
    console.dir(err)
    return new AppError(`Validation Failure... ${err.message}`, 400)
}

// Differentiating Mongoose Errors
app.use((err, req, res, next) => {
    console.log(err.name)

    if (err.name === 'ValidationError') err = handleValidationError(err)
    // if (err.name === 'CastError') err = handleCastError(err)

    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err    // setting the default value so in case of undefined status we will respond with this
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App is listening on port 3000')
}) 