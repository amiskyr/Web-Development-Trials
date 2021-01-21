function hex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`;
}

// rgb(255,100,25); // "rgb(255,100,25)"
// hex(255,100,25); // "#ff6419"

// This is a demonstratiion of factory fucntions where we create object based on a recipe/pattern
// and return them with various properties and methods added to it

// This function creates an object by passing r, g, b as parameters and returns the object
// rgb() and hex() are methods on the object created while r, g, b are properties
function makeColor(r, g, b) {
    const color = {};
    color.r = r;    //adding r as property
    color.g = g;    //adding g as property
    color.b = b;    //adding b as property
    color.rgb = function () {
        const { r, g, b } = this;   // destructuring the color object(this) to extract individual values of r, g, b properties.
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;   // destructuring the color object(this) to extract individual values of r, g, b properties.
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };

    return color;
}

const firstColor = makeColor(35, 255, 150);

firstColor.rgb();
firstColor.hex();