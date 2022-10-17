const userData = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

const renderUser = ({ id, name, username, email, address, phone, website, company }) => {

    const userCard = document.createElement('div');

    userCard.innerHTML = `<div>
    id: ${id} <br>
    name: ${name} <br>
    username: ${username} <br>
    email: ${email} <br>
    phone: ${phone} <br>
    address: ${address.city}, ${address.street}, ${address.suite}<br>
    website: ${website}<br>
    company: ${company.name}<br>
    </div>`;

    //card could be much prettier, but author is too lazy to aply styles 😅

    document.querySelector('body')
        .append(userCard)
}

renderUser(userData);