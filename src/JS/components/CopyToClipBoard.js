import { copyAnimation } from "./CopyAnimation.js";

function copyToClipBoard(tagColor) {
    copyAnimation();

    let inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", tagColor.innerHTML);
   
    document.body.appendChild(inputFalso);  
    inputFalso.select();
   
    document.execCommand("copy");
   
    document.body.removeChild(inputFalso);  
}

export { copyToClipBoard };