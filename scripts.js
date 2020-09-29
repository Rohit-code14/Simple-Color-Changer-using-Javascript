const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const cont2 = document.querySelector(".container2");

const getBGColor = (colour) => {
    return window.getComputedStyle(colour).backgroundColor;
}
const colorChanger= (element,colour) =>{
    return element.addEventListener("mouseenter",()=>{
        cont2.style.backgroundColor=colour;
    })
}
colorChanger(red, getBGColor(red));
colorChanger(blue, getBGColor(blue));
colorChanger(green, getBGColor(green));
colorChanger(pink, getBGColor(pink));