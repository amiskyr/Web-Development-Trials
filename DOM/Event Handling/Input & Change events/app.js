const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// This implementation will update the value after we deselect the input field
// input.addEventListener("change", function (e) {
//     h1.innerText = input.value;
// });

// This implementation will update the value live after each and every change made in input field 
input.addEventListener("input", function (e) {
    h1.innerText = input.value;
});