const req = new XMLHttpRequest();
const p = document.createElement("p");

req.onload = function () {
    console.log("All done with request!");
    console.log(this);
    const data = JSON.parse(this.responseText);

    let price = data.ticker.price;
    console.log(data.ticker.price);
    p.innerText = `Bitcoin Price: ${price}`
}

req.onerror = function () {
    console.log("Error!");
    console.log(this);
    p.innerText = "Get-request Error!"
}

req.open("GET", "https://api.cryptonator.com/api/ticker/btc-usd");
req.send();

document.body.append(p);