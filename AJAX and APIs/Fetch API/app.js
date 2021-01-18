let url = "https://api.cryptonator.com/api/ticker/btc-usd";

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
//failure in any of the request will take the control flow to catch block