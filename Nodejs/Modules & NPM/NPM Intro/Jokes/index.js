const giveMeAJoke = require('give-me-a-joke');
const colors = require('colors')

giveMeAJoke.getRandomDadJoke(
    function (joke) {
        console.log(colors.red.underline(joke));
        console.log(joke.rainbow);
    }
);
