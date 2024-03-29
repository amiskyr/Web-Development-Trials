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

const personSchema = new mongoose.Schema({
    first: String,
    second: String
})

// Mongoose Virtuals
personSchema.virtual('fullName')
    .get(function () {
        return `${this.first} ${this.second}`
    })
    .set(function (v) {
        this.first = v.substr(0, v.indexOf(' '))
        this.second = v.substr(v.indexOf(' ') + 1)
    })

// Mongoose Middleware trial
personSchema.pre('save', async function () {
    this.first = 'Joe'
    this.second = 'Mama'
    console.log('About to save!')
})
personSchema.post('save', async function () {
    console.log('Just saved!')
})

const Person = mongoose.model('Person', personSchema)