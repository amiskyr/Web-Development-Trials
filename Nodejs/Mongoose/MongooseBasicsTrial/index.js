const mongoose = require('mongoose');

const macURI = 'mongodb://root:example@127.0.0.1:27017'
const winURI = 'mongodb://127.0.0.1:27017/movieApp'

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
// const amadeus = new Movie({ title: "Amadeus", year: 1986, score: 9, rating: "U" })

// inserting multiple objects at once
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("Insterted multiple movies")
//         console.log(data)
//     });

