import { useEffect, useState } from "react";

function getRandom(len) {
    return Math.floor(Math.random() * len + 1);
}

const RANDOM_QUOTE_URL = "https://type.fit/api/quotes";

export default function QuoteFetcher() {
    const [quote, setQuote] = useState(
        { text: "", author: "" }
        // This won't work because async function return promise, and useState isn't designed to make use of promise
        // async function () {
        //     const response = await fetch(RANDOM_QUOTE_URL/*, { mode: 'no-cors' }*/);
        //     const jsonResponse = await response.json()
        //     const randomQuote = jsonResponse[getRandom(jsonResponse.length)];
        //     return randomQuote
        // }
    );
    // Here we are encapsulating the async function inside a normal function because useEffect() doesn't allow use of async functions either
    useEffect(() => {
        fetchQuote();
    }, []);
    // This will display a new random quote every time the button is clicked
    async function fetchQuote() {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json()
        const randomQuote = jsonResponse[getRandom(jsonResponse.length)];
        setQuote(randomQuote);
    }

    return (
        <div>
            <button onClick={fetchQuote}>Get Quote using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}

