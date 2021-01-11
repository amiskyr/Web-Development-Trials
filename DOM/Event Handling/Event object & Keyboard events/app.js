// dsiplay information about the mousclick event object
document.querySelector("button").addEventListener("click", function (evt) {
    console.log(evt);
})

const input = document.querySelector("input");
// input.addEventListener("keydown", function () {
//     console.log("KEYDOWN");
// })
// input.addEventListener("keyup", function () {
//     console.log("KEYUP");
// })
// input.addEventListener("keyup", function (e) {
//     console.log(`${e.key} : ${e.code}`);
// })

window.addEventListener("keydown", function (e) {
    switch (e.code) {
        case "ArrowUp":
            console.log("UP!");
            break;
        case "ArrowDown":
            console.log("Down!");
            break;
        case "ArrowLeft":
            console.log("LEFT!");
            break;
        case "ArrowRight":
            console.log("RIGHT!");
            break;
        default:
            console.log("IGNORED!");
    }
})