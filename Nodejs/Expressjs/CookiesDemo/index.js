const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')

// passing a secret key which will be used to sign the cookies and ensure that the data integrity(unchanged cookie content) is maintained by verifying the signed cookie received from client.
app.use(cookieParser('thisismysecret'));

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

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('Ok, signed your fruit cookie!')   // cookie received on client end : "s%3Agrape.LMNZojp%2FiR9Tsj50P0ysA22deJjrP0awUK0S8R3lTUk"
})

app.get('/verifyfruit', (req, res) => {
    // req.cookies will only show unsigned cookies 
    console.log(req.cookies)

    // req.signedCookies will rather show signed cookies only
    console.log(req.signedCookies)

    // if we try to change the cookie content manually from browser this will send an empty object or {"fruit":false} on omitting the content from signed cookie string
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})