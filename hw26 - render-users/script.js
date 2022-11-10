const usersContainer = document.querySelector('body .usersContainer')

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(resp => resp.json())
    .then(users => users.map(userInfo => usersContainer.append(renderUserCard(userInfo))))
    .catch(err => console.error(err))


function renderUserCard(user) {
    let element = document.createElement('div');
    element.classList.add('card-user');
    element.innerHTML = `
    <h2>${user.username}</h2><br>
    <span class="user-name">Real name: <i>${user.name}</i></span><br>
    <a href="tel:${user.phone.split(' ')[0]}">${user.phone.split(' ')[0]}</a><br>
    <span>Adress: ${user.address ?
            ("city " + user.address.city + ", street " + user.address.street + ", suite " + user.address.suite)
            : 'no information'
        } </span><br>
    <span>some more info can be here</span><br>
    `
    return element;
}