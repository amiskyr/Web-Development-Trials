const express = require('express')
const app = express();
const path = require('path');
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')
// setting the path of 'views' on the basis of current directory
app.set('views', path.join(__dirname, '/views'))

app.get("/", (req, res) => {
    res.render('home.ejs')
})

// passing a parameter to the html for ejs access
app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random.ejs', { rand: num })
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params
    const data = redditData[subreddit]
    // console.log(data)
    if (data) {
        res.render('subreddit.ejs', { ...data })    // ... saves us time to iterate through the data object, and we can access all the parameter inside the data in the template
    }
    else {
        res.render('notfound.ejs', { subreddit })   // {subreddit} is same as {subreddit: subreddit}        
    }
})

// looping for EJS example
app.get("/dogs", (req, res) => {
    const dogs = [
        'Rexter', 'Rex', 'Reo', 'Yuki'
    ]
    res.render('dogs', { dogs })
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})