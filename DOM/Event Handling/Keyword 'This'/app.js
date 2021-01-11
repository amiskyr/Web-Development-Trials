const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll("button");

for (let button of buttons) {
    button.addEventListener("click", colorize);
}

const h2s = document.querySelectorAll("h2");

for (let h2 of h2s) {
    h2.addEventListener('click', colorize);
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}