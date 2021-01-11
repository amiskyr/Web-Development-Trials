const btn2 = document.querySelector("#v2");

btn2.onclick = function () {
    alert("v2 clicked!")
}
function scream() {
    console.log("AAAAAHHHHHH");
    console.log("Stop touching me!");
}
btn2.onmouseenter = scream;

const btn3 = document.querySelector("#v3");

btn3.addEventListener("click", () => {
    alert("v3 clicked!")
});

function twist() {
    console.log("TWIST");
}
function shout() {
    console.log("SHOUT");
}

const tasbutton = document.querySelector("#tas");

// We can't have 2 callback functions for an event in this manner
// tasbutton.onclick = twist;
// tasbutton.onclick = shout;//over-writing the previous function for the event

tasbutton.addEventListener("click", twist);
tasbutton.addEventListener("click", shout);
