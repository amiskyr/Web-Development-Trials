const mongoose = require('mongoose');

const macURI = 'mongodb://root:example@127.0.0.1:27017'
const winURI = 'mongodb://127.0.0.1:27017/storeApp'

// setup mongoose connection
mongoose.connect(macURI)
    .then((data) => {
        console.log('---connection open---\n')
        // console.log(data)
    })
    .catch(err => {
        console.log('---connection failed---\n')
        console.log(err)
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 10
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive :|']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

// Model Instance methods
productSchema.methods.greet = function () {
    console.log("Hello! Hi! Howdy!")
    console.log(` - from ${this.name}`)
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale
    return this.save()
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat)
    return this.save()
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 }) 
}

// Model declaration
const Product = mongoose.model('Product', productSchema)

// Search the object in db and call the greet function on it
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'BykHelmet2' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

const startSale = async () => {
    await Product.fireSale()
}

// If we don't follow the schema structure and type of property, it will throw an error when trying to insert document in db
const bike = new Product({
    name: 'Mountain Bike',
    price: 599
});

// Non satisfactory Schema
// This will throw a validation error while saving in DB i.e. "Product validation failed: price: Cast to Number failed for value "Hello" (type string) at path "price""
const bike1 = new Product({
    name: 'Mountain Bike 1',
    price: 'Hello',
});

// Here only the properties defined by schema will be saved in document and pushed to db
const bike2 = new Product({
    name: 'Mountain Bike 2',
    price: 999,
    color: 'black'
});

// test the 'default' constraint by setting it false
const bikeHelmet = new Product({
    name: 'Bike Helmet',
    price: 49,
})

// test the 'default' constraint by setting it false
// This will throw a validation error while saving in DB i.e. "Product validation failed: name: Path `name` (`Bike Helmet from Helmet Makers`) is longer than the maximum allowed length (10)."
const bikeHelmet1 = new Product({
    name: 'Bike Helmet from Helmet Makers',
    price: 39,
})

// test the 'default' constraint by setting it false
// This will throw a validation error while saving in DB i.e. "Product validation failed: price: Path `price` (-39) is less than minimum allowed value (0)."
const bikeHelmet2 = new Product({
    name: 'BykHelmet',
    price: -39,
})

// saving a string array in db for category
const bikeHelmet3 = new Product({
    name: 'BykHelmet2',
    price: 44,
    categories: ['cycling', 'Safety', '3']
})

// saving a nested object in db for qty
const bikeHelmet4 = new Product({
    name: 'BykHelmet3',
    price: 47,
    categories: ['cycling', 'Safety', '3']
})

// saving a new object in db for qty
const tirePump = new Product({
    name: 'TirePump',
    price: 19,
    categories: ['cycling', 'Safety']
})

// This will throw a validation error while saving in DB i.e. Product validation failed: size: Cast to string failed for value "[ 'XS' ]" (type Array) at path "size"
const cyclingJersey = new Product({
    name: 'CycJersey',
    price: 29,
    categories: ['cycling', 'fashion'],
    size: ['XS']
})

function SaveObjectToDB(obj) {
    obj.save()
        .then(data => {
            console.log("Saved bike")
            console.log(data)
        })
        .catch(err => {
            console.log("Error saving")
            console.log(err)
        })
}

function UpdateObject() {
    // By default if we don't mention 'runValidators' it will update the price without validating the schema
    Product.findOneAndUpdate({ name: 'TirePump' }, { price: -19 }, { new: true, runValidators: true })
        .then(data => {
            console.log("Saved bike")
            console.log(data)
        })
        .catch(err => {
            console.log("Error saving")
            console.log(err)
        })
}
