const express = require('express');
const app = express();
// console.dir(app);

// Receiving a request and capturing it
// app.use((request, response) => {
//     console.log("We got a new request!")
//     // console.dir(request)
//     // response.send("Hello, here's a response for your request.")  // text response
//     response.send({ color: 'red' })  // JSON object response
//     // response.send("<h1>Response Webpage Title</h1>")
// })

// Example of GET Requests
// root route
app.get('/', (req, res) => {
    console.log("Root Request!")
    res.send("Welcome to Paw Care!!! :)");
})

// routing a request
app.get('/cats', (req, res) => {
    console.log("Cat Request!")
    res.send("Meow!")
})

app.get('/dogs', (req, res) => {
    console.log("Dog Request!")
    res.send("Woof!")
})

// Example of POST Request
app.post('/', (req, res) => {
    console.log("Post Request on root!")
    res.send("We still don't allow POST requests at Paw Care! :(")
})

// Example of parameters
app.get('/r/:subreddit', (req, res) => {
    console.log("Request for a subreddit", req.params)
    const { subreddit } = req.params
    res.send(`<h1>Welcome to r/${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    console.log("Request for a subreddit with postId", req.params)
    const { subreddit, postId } = req.params
    res.send(`<h1>Welcome to r/${subreddit} subreddit Post ID: ${postId}</h1>`)
})

// Example of query strings
app.get('/search', (req, res) => {
    console.log("Search Query", req.query)
    const { q } = req.query
    if (!q) {
        res.send(`<h1>Nothing found if nothing searched!</h1>`)
    }
    else {
        res.send(`<h1>Search Results for ${q}</h1>`)
    }
})

// All the requests that don't match the above routes/paths will be processed by "*"
app.get('*', (req, res) => {
    console.log("Undefined Path Request!")
    res.send("Sorry, we couldn't identify that path!")
})

// Starting the server and listening on port 8080
app.listen(8080, () => {
    console.log("Listening on Port 8080!")
})
