function ramdomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + ("000000" + color).slice(-6);  
}

export { ramdomColor };