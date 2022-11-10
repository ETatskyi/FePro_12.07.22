let users;

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(resp => resp.json())
    .then(json => users = json)
    .catch(err => console.error(err))

addFormListener('#create-new-card-form')


function renderPostCardTo(post, parentSelector) {
    const parentElement = document.querySelector(parentSelector)
    card = document.createElement('div');
    card.classList.add('card')
    card.innerHTML = `<span class="postBy">Post #${post.id} by ${users.find(user => user.id == post.userId).name}</span><h3>${post.title}</h3><p>${post.body}</p>`
    parentElement.appendChild(card)

    return post
}



function addFormListener(elementSelector) {
    document.querySelector(elementSelector)
        .addEventListener('click', (event) => {
            const target = event.target
            const form = target.closest('form')

            if (target.classList.contains('form-open-close-button')) {
                form.classList.toggle('closed')
            }

            if (target.id == 'createNewPostButton') {

                createNewPostCard(form)
            }

        })
}

function createNewPostCard(form) {
    let post = parseNewPostForm(form);

    if (!checkFormFields(form)) {
        return
    }


    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            alert('post publishing succesful')
            renderPostCardTo(json, '#card-container')
            clearForm(form);
            return json
        });
}


function checkFormFields(form) {
    let result = true
    const inputs = form.querySelectorAll('input,textarea,select')
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
    const inputs = form.querySelectorAll('input,textarea,select')
    inputs.forEach(input => { input.value = '' })
}

function parseNewPostForm(form) {
    let data = Array.from(form)
    let post = {
        title: data.find(el => el.id == 'title').value,
        body: data.find(el => el.id == 'body').value,
        userId: data.find(el => el.id == 'userId').value,
    }

    return post
}