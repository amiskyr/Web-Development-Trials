import { useEffect, useState } from "react";
import "./Loader.css";
const RANDOM_QUOTE_URL = "https://type.fit/api/quotes";

function getRandom(len) {
    return Math.floor(Math.random() * len + 1);
}

export default function QuoteFetcherLoader() {
    const [quote, setQuote] = useState(
        { text: "", author: "" }
    );
    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading && <p className="Loader" style={{ opacity: isLoading ? 1 : 0 }}>Loading...</p>}
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    );
}

