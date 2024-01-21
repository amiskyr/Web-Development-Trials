const express = require('express');
const router = express.Router();    // returns a new Router object

// When used this way, this middleware will act only for the outes specific to this route-group
router.use((req, res, next) => {
    // http://localhost:3000/admin/topsecret?isAdmin=true - satisfies condition
    if (req.query.isAdmin) {
        next();
    }
    // http://localhost:3000/admin/topsecret - doesn't satisfy condition
    res.send("Sorry, not an admin!")
})

router.get('/topsecret', (req, res) => {
    res.send('This is Top Secret!')
})

router.get('/deleteeverything', (req, res) => {
    res.send('Okay, deleted it all!')
})

module.exports = router;