let url = "https://api.cryptonator.com/api/ticker/btc-usd";

// basic axiom function 'get()' to access the data through get-request
// axios.get(url)
//     .then((res) => {
//         console.log(res.data.ticker.price);
//     })
//     .catch((err) => {
//         console.log("ERROR!", err);
//     })

// Async function based implementation for fetching json data from "cryptonator.com/api/"
// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await axios.get(url);
//         console.log(res.data.ticker.price);
//     }
//     catch (e) {
//         console.log("ERROR!", e)
//     }
// }

// referencing the <ul> element with identifier="jokes"
const jokes = document.querySelector("#jokes");

// referencing the only button object in document
const button = document.querySelector("button");

// Addition of new joke by appending the joke text to the new <LI> element
const addNewJoke = async () => {
    const jokeText = await getDadJoke();

    //new <LI> element created
    const newLI = document.createElement("LI");

    console.log(jokeText);
    newLI.append(jokeText);
    jokes.append(newLI);
}

// async function to retrieve the json data from the request to api
const getDadJoke = async () => {
    try {
        // headers are used to change the request specifications
        const config = { headers: { Accept: "application/json" } };

        // This will fetch the whole webpage with html elements
        // const res = await axios.get("https://icanhazdadjoke.com/");
        // console.log(res);

        // This will only get the json data due to change in header
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        return res.data.joke;
    }
    catch (e) {
        console.log("Error encountered!", e);
    }
}

// Function assigned to onClick event of the button
button.addEventListener("click", addNewJoke);