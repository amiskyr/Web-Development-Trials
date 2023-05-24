const math = require('./math'); // math variable is storing the object fetched by require() method

// console.log(math);  // this will print the object on console

// console.log(math.PI);
// console.log(math.add(2, 3));
// console.log(math.square(2));

// Directory reference example
const shelter = require('./shelter')
console.log(`All Doge are here:`, shelter)