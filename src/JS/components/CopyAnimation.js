function copyAnimation() {
    let copyAnimation = document.getElementById("copy-container");
    copyAnimation.classList.add("copy-animation");
    setTimeout(() => {
        copyAnimation.classList.remove("copy-animation");
    } , 1000);
}

export { copyAnimation };