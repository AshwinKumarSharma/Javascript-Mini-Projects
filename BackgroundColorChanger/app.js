const randomColor = () => {
    let value = '0123456789ABCDEDF';
    let color = '#';
    for(let i = 1; i <= 6; i++) {
        color = color + value[Math.floor(Math.random() * 16)];
    }
    return color;
}

button.addEventListener("click", () => {
    const canvas = document.querySelector("#canvas");
    canvas.style.backgroundColor = randomColor();
    document.body.style.backgroundColor = randomColor();
});



