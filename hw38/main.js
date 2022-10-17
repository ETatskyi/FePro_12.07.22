function httpGet(url) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', url);
    xhr.send();

    return new Promise((res, rej) => {

        xhr.onload = () => res(xhr.response);

        xhr.onerror = function () {
            rej(this.response)
            // rej(xhr.response)
        };
    })

}

httpGet("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        console.log(`Resolve: ${response}`)
    })
    .catch(function (error) {
        console.log(`Reject: ${error}`)
    });