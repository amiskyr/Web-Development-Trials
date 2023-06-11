const mongoose = require('mongoose');
const Product = require('./models/product');

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

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })


// Inserting one product
// p.save()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const seedProducts = [
    {
        name: "Fairy Eggplant",
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: "Organic Goddess Melon",
        price: 4.99,
        category: 'fruit'
    },
    {
        name: "Organic Mini Seedless Watermelon",
        price: 3.99,
        category: 'fruit'
    },
    {
        name: "Organic Celery",
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: "Chocolate Whole Milk",
        price: 2.69,
        category: 'dairy'
    },
]

// Product.insertMany(seedProducts)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })
