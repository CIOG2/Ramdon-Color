import {ramdomColor} from './components/ColorRamdom.js';
import { copyToClipBoard } from './components/copyToClipBoard.js';

let areaChangeColor = document.getElementById("areaChangeColor");
let tagColor = document.getElementById("color");
let buttonChangeColor = document.getElementById("button-Change-Color");
let copy = document.getElementById("copy-container");



buttonChangeColor.addEventListener("click", changeColor);
copy.addEventListener("click", () => copyToClipBoard(tagColor));


function changeColor() {
    let color = ramdomColor();
    areaChangeColor.style.backgroundColor = color;
    tagColor.innerHTML = color;
    tagColor.value = color;
}


window.onload = () => {
    changeColor();
}