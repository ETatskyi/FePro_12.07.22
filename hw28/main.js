fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(resp => resp.json())
    .then(users => {
        console.log(users)
        document.querySelector('body .wrapper').append(renderUsersCard(users))
        addRemoveListeners('.card')
    })
    .catch(err => console.error(err))


function renderUsersCard(users) {
    let fragment = document.createDocumentFragment();
    users.forEach(user => {
        card = document.createElement('div');
        card.classList.add('card')
        card.innerHTML = `
        <img src="http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16"
        alt="" />
        <div class="user-info-container">
        <p class="real-name">${user.name}</p>
        <p class="company-name">${user.company.name}</p>
        <p class="phone">phone: ${user.phone}</p>
        <p class="website">website: <a href="https://${user.website}">${user.website}</a></p>
        </div>
        <div class="delete-button delete-button-container zoom_shrink"><div class="delete-button delete_icon zoom_shrink"></div></div>
        `
        fragment.appendChild(card)

        return user
    })

    return fragment;
}

function addRemoveListeners(elements) {
    document.querySelectorAll(elements).forEach(card => {
        card.addEventListener('click', (event) => {
            console.log(event.target)
            if (event.target.classList.contains('delete-button')) {
                console.log(event.target.classList)
                card.remove()
            }
        })
    }
    )
}