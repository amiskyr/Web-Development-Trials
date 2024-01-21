const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.get('/greet', (req, res) => {
    // parsing a cookie
    const { name = 'No-name' } = req.cookies;
    res.send(`Hey there ${name}!`)
})

app.get('/setname', (req, res) => {
    // setting and sending a cookie to browser
    res.cookie('name', 'askyr')
    res.send('Okay, sent you a cookie!')
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})