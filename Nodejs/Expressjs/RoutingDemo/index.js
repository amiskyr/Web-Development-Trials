const express = require('express');
const app = express();
const shelterRoutes = require('./routes/shelters');
const dogRoutes = require('./routes/dogs');
const adminRoutes = require('./routes/admin')

// When used this way, this middleware will act for all the routes.
// app.use((req, res, next) => {
//     if (req.query.isAdmin) {
//         next();
//     }
//     res.send("Sorry, not an admin!")
// })

// it takes all the routes from the shelterRoutes and prefix them with '/'
// just a rather systematic way of concatenating and managing routes in express
app.use('/shelters', shelterRoutes)
app.use('/dogs', dogRoutes)
app.use('/admin', adminRoutes)

app.listen(3000, () => {
    console.log('Serving app on localhost:3000')
})