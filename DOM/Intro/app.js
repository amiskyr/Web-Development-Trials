// const allImages = document.getElementsByTagName("img");

// for (let img of allImages) {
//     img.src = "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";
// }

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
    img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const links = document.querySelectorAll("p a")

for (let link of links) {
    console.log(link.href);
}

for (let link of links) {
    link.style.color = "rgb(0, 108, 134)";
    link.style.textDecorationColor = "magenta";
    link.style.textDecorationStyle = "wavy";
}