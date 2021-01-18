let url = "https://api.cryptonator.com/api/ticker/btc-usd";

// axios.get(url)
//     .then((res) => {
//         console.log(res.data.ticker.price);
//     })
//     .catch((err) => {
//         console.log("ERROE!", err);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get(url);
        console.log(res.data.ticker.price);
    }
    catch (e) {
        console.log("ERROR!", e)
    }
}

const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();

    const newLI = document.createElement("LI");
    console.log(jokeText);
    newLI.append(jokeText);
    jokes.append(newLI);
}

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

button.addEventListener("click", addNewJoke);