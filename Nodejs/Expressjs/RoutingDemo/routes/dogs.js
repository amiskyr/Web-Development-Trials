const express = require('express');
const router = express.Router();    // returns a new Router object

router.get('/', (req, res) => {
    res.send('All Dogs!')
})

router.post('/', (req, res) => {
    res.send('Creating Dog!')
})

router.get('/:id', (req, res) => {
    res.send('Viewing one DOg!')
})

router.get('/:id/edit', (req, res) => {
    res.send('Editing one Dog!')
})

module.exports = router;