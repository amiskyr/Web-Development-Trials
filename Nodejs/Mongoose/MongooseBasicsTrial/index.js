const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:17017/movieApp')
    .then(() => {
        console.log('connection open')
    })
    .catch(err => {
        console.log('connection failed')
    })

// defining a mongoose schema
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

// declaring a mongoose model
const Movie = mongoose.model('Movie', movieSchema)

// declaring an instance of Movie class
const interstellar = new Movie({ title: "Interstellar", year: 2014, score: 9, rating: "U" })
