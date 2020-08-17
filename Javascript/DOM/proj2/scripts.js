const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const green = document.querySelector(".green");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

console.log("orange", window.getComputedStyle(green).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

// var color = getBGColor(viloet);
// viloet.addEventListener('mouseenter', () => {
//     center.style.background = color;
// })


const magicColorChanger = (element, color) => {
    return element.addEventListener('mouseenter', () => {
        center.style.background = color;
    });
}

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
console.log(magicColorChanger(green, getBGColor(green)));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));



