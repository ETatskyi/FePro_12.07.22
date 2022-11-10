const allowedUsers = '[{"login":"admin","password":"admin"}]';

document.addEventListener('DOMContentLoaded', () => {
    addListeners()
    showHelloOrLoginScreen(authorisedUser())
})

function addListeners() {
    document.querySelector('#log-in-button').addEventListener('click', logIn)
}

function logIn() {
    const userData = {
        login: document.querySelector('#login').value,
        password: document.querySelector('#password').value,
    }

    if (userData.login && userData.password) {
        document.cookie = `user=${JSON.stringify(userData)}`
    }

    showHelloOrLoginScreen(authorisedUser())
}

function showHelloOrLoginScreen(userInfo) {
    const helloscreen = document.querySelector('#hello-screen')
    const loginForm = document.querySelector('#login-form')

    if (allowedUsers.includes(JSON.stringify(userInfo))) {
        helloscreen.classList.remove('hidden')
        loginForm.classList.add('hidden')
        helloscreen.querySelector('#username').innerText = userInfo.login
    } else {
        helloscreen.classList.add('hidden')
        loginForm.classList.remove('hidden')

        alert('login and/or password is incorrect')
    }
}


function authorisedUser() {
    const cookie = getCookie('user')
    return cookie ? JSON.parse(cookie) : null
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}