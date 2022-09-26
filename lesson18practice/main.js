// const email = 'admin@gmail.com';
// const regex = /^\w{3,}@\w{3,}\.\w{3}$/ig

// console.log(email.match(regex))
// console.log(regex.test(email))

document.addEventListener('DOMContentLoaded', () => {
    addListListeners()
})

function addListListeners() {
    const list = document.querySelector('#list-container')
    list.addEventListener('click', event => swapWithNext(event.target))
}

function swapWithNext(element) {
    const parent = element.parentNode;
    const next = element.nextElementSibling;
    const target = next ? next.nextElementSibling : null;
    console.dir(element)
    parent.insertBefore(element, target)
}