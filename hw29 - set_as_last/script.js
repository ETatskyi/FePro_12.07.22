document.addEventListener('DOMContentLoaded', () => {
    addListeners()
})


function addListeners() {
    let container = document.querySelector('.square-container')

    container.addEventListener('click', event => {
        const target = event.target
        const parent = event.target.parentNode

        if (target.classList.contains('square-item')) {
            markRed(target)
            setAsLastChild(target, parent)
        }
    })
}

function markRed(target) {
    target.classList.add('red')
}

function setAsLastChild(childNode, parentNode) {
    parentNode.insertBefore(childNode, null)
}