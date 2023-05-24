const rex = require('./rex')
const reo = require('./reo')
const yuki = require('./yuki')

const allDogs = [rex, reo, yuki]
// console.log(allDogs)

// Since this is the index file inside the "shelter/" directory, it acts as the controller of the this directory
// hence anything we export here will be available to anyone who uses require with the directory name
// check the result when we use it in app.js -> require(./shelter)
module.exports = allDogs;