const express = require('express')
const app = express()
const path = require('path');

// this middleware will parse the request body with urlencoded payload data
app.use(express.urlencoded({ extended: true }))
// this middleware will parse the request body with json payload data
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

const comments = [
    {
        username: "askyr",
        comment: "I wish life was easy."
    },
    {
        username: "prat",
        comment: "I love Overwatch! :clownface:"
    },
    {
        username: "surf",
        comment: "OW all day, everyday!"
    },
    {
        username: "nightwing",
        comment: "Someone please add a barbell setup in my dorm gym."
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment })
    res.redirect('/comments')
})

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    // console.log(req.body)
    const { meat, qty } = req.body
    res.send(`OK, here are your ${qty} ${meat} tacos.`)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

/*
CRUD functionality blueprint following RESTful pattern

GET /comments - List all comments
POST /comments - Create a new comment
GET /comments/:id - Get one specific comment(using ID)
PATCH /comments/:id - Update one comment
DELETE /comments/:id - Destroy one comment
*/