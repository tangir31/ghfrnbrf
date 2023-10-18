const imageElement = document.getElementById
("image")
const numberElement = document.getElementById
("number")
let count = 0;
const maxConst = 100;

const incrementLoader = () => {
    if (count < maxConst) {
        count++;

        numberElement.textContent = count + "%";

        const opacity = count / maxConst;
        imageElement.style.opacity = opacity;

        imageElement.style.filter = `blue($(10 - 10 * opacity)px)`;
    } else if (count === maxConst) {
        clearInterval(loaderInterval);
        numberElement.textContent = "";
    }
}

const loaderInterval = setInterval
(incrementLoader, 60);
