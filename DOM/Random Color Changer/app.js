const button = document.querySelector("button");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
    const newColor = makeRandomColor();

    document.body.style.backgroundColor = newColor;

    h1.innerText = newColor;
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}