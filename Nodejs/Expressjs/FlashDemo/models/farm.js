const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;

const farmSchema = Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'Email required']
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

// Read https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()

// Pre Query Middleware for 'findOneAndDelete'
// farmSchema.pre('findOneAndDelete', async function (farm) {
//     console.log("PRE MIDDLEWARE!");
//     console.log(farm);
// })

// Post Query Middleware
farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm.products.length) {
        const res = await Product.deleteMany({ _id: { $in: farm.products } })//using mongo 'in' operator to delete content of the products array
        console.log(res);
    }
    // console.log("POST MIDDLEWARE!");
    // console.log(farm);
})


const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;