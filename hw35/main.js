$.ajax({ url: "https://jsonplaceholder.typicode.com/users" })
    .done(function (users) {

        let insertRows = users.map(user => `<tr><td>${user.id}</td><td>${user.name}</td><td>${user.username}</td><td>${user.email}</td><td>${user.phone}</td><td>${user.website}</td></tr>`)
            .join();

        $('.users-table')
            .append(insertRows)
    });