const express = require('express');
const router = express.Router();    // returns a new Router object

router.get('/', (req, res) => {
    res.send('All Shelters!')
})

router.post('/', (req, res) => {
    res.send('Creating Shelter!')
})

router.get('/:id', (req, res) => {
    res.send('Viewing one Shelter!')
})

router.get('/:id/edit', (req, res) => {
    res.send('Editing one Shelter!')
})

module.exports = router;