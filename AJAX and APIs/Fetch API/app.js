let url = "https://api.cryptonator.com/api/ticker/btc-usd";

// normal promise based implementation of fetch method
// fetch(url)
//     .then((res) => {
//         console.log("Response, waiting to parse...", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("Data parsed...");
//         console.log(data.ticker.price);
//     })
//     .catch((e) => {
//         console.log("Error!", e);
//     })

// async function based implementation of fetch
// failure in any of the request will take the control flow to catch block
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.ticker.price);
    }
    catch (e) {
        console.log("Request error!", e);
    }
}