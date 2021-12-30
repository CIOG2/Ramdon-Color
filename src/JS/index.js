let areaChangeColor = document.getElementById("areaChangeColor");
let tagColor = document.getElementById("color");


function changeColor() {
    let color = ramdomColor();
    areaChangeColor.style.backgroundColor = color;
    tagColor.innerHTML = color;
    tagColor.value = color;
}

function ramdomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + ("000000" + color).slice(-6);  
}


function copyToClipBoard() {
    let inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", tagColor.innerHTML);
   
    document.body.appendChild(inputFalso);  
    inputFalso.select();
   
    document.execCommand("copy");
   
    document.body.removeChild(inputFalso);  
  }

window.onload = () => {
    changeColor();
}