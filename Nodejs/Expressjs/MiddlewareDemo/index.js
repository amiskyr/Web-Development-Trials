const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('tiny'))     // using the morgan middleware

// app.use((req, res, next) => {
//     console.log("First Middleware")

// next()      // this will redirect us to the next middleware or the route handler

//     console.log("First Middleware after next()")
// })

// app.use((req, res, next) => {
//     console.log("Second Middleware")
//     return next()
//     console.log("Second Middleware after next()")
// })

app.use((req, res, next) => {
    // req.method = 'GET'      // this will tuen all requests into GET request
    req.requestTime = Date.now()
    console.log(`Req Type: ${req.method} - Req Path: ${req.path}`)
    next()
})

const verifyPassword = (req, res, next) => {
    // http://localhost:3000/dogs?password=chickennuggets will let us process the request further

    const { password } = req.query
    if (password === "chickennuggets") {
        next()
    }
    res.send("Sorry, You need a password!")
}

// This middleware will be called everytime a request of any kind is received on '/dogs' route
app.use('/dogs', (req, res, next) => {
    console.log("I love Dogs!")
    next()
})

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/dogs', (req, res) => {
    res.status(404).send('Woof Woof')
})

// protecting a specific route
// verifyPassword() is passed as a callback fundtion which will act just like a middleware as it contains the next() method call
app.get('/secret', verifyPassword, (req, res) => {
    res.send("My secret: GG")
})

// If none of the routes are matched for the incoming request, this acts as the not found handler to send a 404 response
app.use((req, res) => {
    res.send("NOT FOUND")
})

app.listen('3000', () => {
    console.log('App is running on localhost:3000')
})