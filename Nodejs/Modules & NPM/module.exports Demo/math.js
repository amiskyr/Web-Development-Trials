const PI = 3.14159;
const add = (x, y) => x + y;
const square = (x) => x * x;

// by default it will return an empty object when fetched, since we are not exporting anything from here.

// Now when we export something and all of that is returned on fetching from other file.

// module.exports = 'module.exports Example here'

// ----- Approach 1 -----
// module.exports.PI = PI;
// module.exports.add = add;
// module.exports.square = square;

// ----- Approach 2 -----
// const math = {
//     PI: PI,
//     add: add,
//     square: square
// }
// module.exports = math; // exporting the math object directly

// ----- Approach 3 -----
// module.exports.PI = 3.14159;
// module.exports.add = (x, y) => x + y;
// module.exports.square = (x) => x * x;

// ----- Approach 4 -----
// module.exports can be written as exports as well
exports.PI = 3.14159;
exports.add = (x, y) => x + y;
exports.square = (x) => x * x;