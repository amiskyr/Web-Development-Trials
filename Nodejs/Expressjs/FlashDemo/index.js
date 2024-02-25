const express = require('express')
const app = express()
const path = require('path')
const methodOverride = require('method-override')

const Product = require('./models/product')
const Farm = require('./models/farm')

const mongoose = require('mongoose');
const AppError = require('./AppError')

const session = require('express-session');
const flash = require('connect-flash');

const sessionOptions = {secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false};
app.use(session(sessionOptions));
app.use(flash());

const macURI = 'mongodb://root:example@127.0.0.1:27017'
const winURI = 'mongodb://127.0.0.1:27017/farmStandV2_relDemo'

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

// middleware to display flash messages for every req-res cycle it is rquired
app.use((req, res, next) => {
    res.locals.messages = req.flash('success');
    next()
})

// Farm routes
app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});

    // rendering the flash message
    res.render('farms/index', { farms });
})

app.delete('/farms/:id/', async (req, res) => {
    // Read https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
    const farm = await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new');
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm });
})

app.post('/farms', async (req, res) => {
    // res.send(req.body)
    const farm = new Farm(req.body);
    await farm.save();

    // adding the flash message to the key
    req.flash('success', 'Successfully made a new farm!');
    res.redirect('/farms');
})

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);

    res.render('products/new', { categories, farm });
})

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
})

// Product routes

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
        const products = await Product.find({ category });
        res.render('products/index', { products, category });
    }
    else {
        const products = await Product.find({});
        res.render('products/index', { products, category: 'All' });
    }
}))

// Add a new product use GET request
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
})

// Submit the form of new product details to be added using POST request
app.post('/products', wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    // console.log(newProduct)
    res.redirect(`/products/${newProduct._id}`);
}))

// Product details using _id in DB
app.get('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const productFound = await Product.findById(id).populate('farm', 'name');
    console.log(productFound);
    if (!productFound) {
        // throw new AppError('Product not found', 404)    // This will not work in case of sync functions and their errors
        throw new AppError('Product not found', 404);   // This will trigger the error handling middleware and work accordingly
    }
    res.render('products/show', { productFound });
}))

// Edit product details by and opening the edit page on GET request
app.get('/products/:id/edit', wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const foundProduct = await Product.findById(id);

    if (!foundProduct) {
        throw new AppError('Product not found', 404);    // This will trigger the error handling middleware and work accordingly
    }
    res.render('products/edit', { foundProduct, categories });
}))

// Submission of the updated product details form using PUT request (method-override) to update in DB
app.put('/products/:id', wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${updatedProduct._id}`);
}))

// Deletion of the product using DELETE request (method-override) from DB
app.delete('/products/:id', wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
}))

const handleValidationError = err => {
    console.dir(err);
    return new AppError(`Validation Failure... ${err.message}`, 400);
}

// Differentiating Mongoose Errors
app.use((err, req, res, next) => {
    console.log(err.name);

    if (err.name === 'ValidationError')
        err = handleValidationError(err);
    // if (err.name === 'CastError') 
    //     err = handleCastError(err)

    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;    // setting the default value so in case of undefined status we will respond with this
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('App is listening on port 3000');
}) 