const rightBorder = 2; //set final right position here

document.addEventListener('DOMContentLoaded', addListeners)

function addListeners() {
    document.querySelector('.cube').addEventListener('click', moveElementToRight)
}


function moveElementToRight(event) {
    const element = event.target;
    const parent = element.parentNode;

    element.style.right = `${parent.offsetWidth - element.offsetWidth}px`;

    let move = setInterval(function () {
        let right = parseInt(element.style.right);

        if (right <= rightBorder) {
            clearInterval(move)
        }

        element.style.right = right - 1 + 'px';

    }, 1)
}