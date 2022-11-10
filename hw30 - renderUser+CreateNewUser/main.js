fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(resp => resp.json())
    .then(users => {
        console.log(users);
        document.querySelector('body .card-container')
            .append(renderUsers(users));
    })
    .catch(err => console.error(err))

addDeleteListener('body .card-container')
addFormListener('.create-new-user-form')
// document.querySelector('#createNewUserButton').addEventListener('click',)

function renderUsers(users) {
    let fragment = document.createDocumentFragment();
    users.forEach(user => renderUserCardTo(user, fragment))
    return fragment;
}

function renderUserCardTo(userInfo, parentElement) {
    card = document.createElement('div');
    card.classList.add('card')
    card.innerHTML = `
    <img src="http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16"
    alt="" />
    <div class="user-info-container">
    <p class="real-name">${userInfo.name}</p>
    <p class="company-name">${userInfo.company.name}</p>
    <p class="phone">phone: ${userInfo.phone}</p>
    <p class="website">website: <a href="https://${userInfo.website}">${userInfo.website}</a></p>
    </div>
    <div class="delete-button delete-button-container zoom_shrink"><div class="delete-button delete_icon zoom_shrink"></div></div>
    `
    parentElement.appendChild(card)

    return userInfo
}

function addDeleteListener(elementSelector) {
    document.querySelector(elementSelector)
        .addEventListener('click', (event) => {
            const card = event.target.closest('.card')

            if (event.target.classList.contains('delete-button')) {
                event.target.closest('.card').remove()
            }

            card?.classList.toggle('active')
        })
}

function addFormListener(elementSelector) {
    document.querySelector(elementSelector)
        .addEventListener('click', (event) => {
            const target = event.target
            const form = target.closest('form')

            if (target.classList.contains('form-open-close-button')) {
                form.classList.toggle('closed')
            }

            if (target.id == 'createNewUserButton') {
                createNewUserCard(form)
            }

        })
}

function createNewUserCard(form) {
    let user = parseUserCreateForm(form);

    if (!checkFormFields(form)) {
        return
    }

    renderUserCardTo(user, document.querySelector('body .card-container'));
    alert('user created succesfull')
    clearForm(form);
}


function checkFormFields(form) {
    let result = true
    const inputs = form.querySelectorAll('input')
    inputs.forEach(input => {
        if (!input.value) {
            input.classList.add('invalid-field')
            setTimeout(() => {
                input.classList.remove('invalid-field')
            }, 1500)

            result = false;
        }

    })

    return result
};

function clearForm(form) {
    const inputs = form.querySelectorAll('input')
    inputs.forEach(input => { input.value = '' })
}

function parseUserCreateForm(form) {
    let data = Array.from(form)
    let user = {
        name: data.find(el => el.id == 'newUser-name').value,
        company: {
            name: data.find(el => el.id == 'newUser-company-name').value,
        },
        phone: data.find(el => el.id == 'newUser-phone').value,
        website: data.find(el => el.id == 'newUser-website').value,
    }

    return user
}