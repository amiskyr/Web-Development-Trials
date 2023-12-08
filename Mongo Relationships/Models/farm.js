const mongoose = require('mongoose');
const { Schema } = mongoose;

const macURI = 'mongodb://root:example@127.0.0.1:27017'
const winURI = 'mongodb://127.0.0.1:27017/relationshipDemo'

// setup mongoose connection
mongoose.connect(winURI)
    .then((data) => {
        console.log('---connection open---\n')
        // console.log(data)
    })
    .catch(err => {
        console.log('---connection failed---\n')
        console.log(err)
    });

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar baby Watermelon', price: 5.99, season: 'Summer' },
//     { name: 'Asparagus', price: 4.99, season: 'Spring' },
// ])

// This implementation will show the whole farm document on mongoose side, but when storing it in MongoDB it will only store the document id (of product) for reference.
// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Full Belly Farms', city: 'Guinda, CA' });
//     const melon = await Product.findOne({ name: 'Goddess Melon' });
//     farm.products.push(melon);
//     await farm.save();
//     console.log(farm);
// }

// makeFarm();

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' });
    const watermelon = await Product.findOne({ name: 'Sugar baby Watermelon' });
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

// addProduct();

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products')
    .then(farm => console.log(farm));