document.addEventListener('DOMContentLoaded', () => {
    addListeners()
})

function addListeners() {
    let boxes = document.querySelectorAll('.box')

    boxes.forEach(box => box.addEventListener('click', event => incDecValue(event.target)))
}


function incDecValue(element) {
    if (element.className == 'inc_dec_button') {
        let output = element.parentNode.previousElementSibling;
        let value = output.innerText;
        if (element.innerText === '+') {
            output.innerText = Number.parseInt(value) + 1
        } else if(element.innerText === '-') {
            output.innerText = Number.parseInt(value) - 1
        }
    }
}