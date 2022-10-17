const delay = (time) => {

    return new Promise((res, rej) => {
        if (typeof time == 'number' && time > 0) {
            setTimeout(res(`Fire after ${time / 1000} sec`), time)
        }

        rej('Error!')
    })

}

delay(3000)
    .then(() => console.log('Fire after 3 sec'))
    .catch(() => console.log('Error!'));