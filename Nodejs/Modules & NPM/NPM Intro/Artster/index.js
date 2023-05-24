const figlet = require("figlet");
const colors = require('colors')
const args = process.argv.slice(2)

figlet("Hello World", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});

// figlet(args.toString(), function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// }); 