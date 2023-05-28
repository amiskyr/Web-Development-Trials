const express = require('express')
const app = express()

// this middleware will parse the request body with urlencoded payload data
app.use(express.urlencoded({ extended: true }))
// this middleware will parse the request body with json payload data
app.use(express.json())

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