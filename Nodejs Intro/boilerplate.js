const fs = require('fs');

const directoryName = process.argv[2] || 'TemplateProject'

// console.log(fs);

// fs.mkdir('BoilerPlate', { recursive: true }, (err) => {
//     console.log("Inside the callback");
//     if (err)
//         throw err;
// });

try {
    fs.mkdirSync(directoryName)
    fs.writeFileSync(`${directoryName}/index.html`, "")
    fs.writeFileSync(`${directoryName}/styles.css`, "")
    fs.writeFileSync(`${directoryName}/app.js`, "")
}
catch (e) {
    console.log(`Something went wrong!!!!!`)
    console.log(e)
}