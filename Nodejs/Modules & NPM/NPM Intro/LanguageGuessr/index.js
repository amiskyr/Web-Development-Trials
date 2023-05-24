const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];

const langCode = franc(input)

if (langCode === 'und') {
    console.log("Sorry, couldn't figure it out. Please try again with more sample text!".red)
}
else {
    const language = langs.where('3', langCode)

    if (language) {
        console.log(colors.green(`Best guess is ${language.name}.`.green));
    } else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`.red));
    }
}
