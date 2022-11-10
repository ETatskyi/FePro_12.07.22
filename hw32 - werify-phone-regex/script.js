document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#check-number')
        .addEventListener('click', event => {
            let num = document.querySelector('#phonenumber').value

            verifyPhoneNumber(num) ? alert('Correct number!') : alert('Fail!')
        })
})


function verifyPhoneNumber(number) {
    const regex = /^\+38\(0\d{2}\)\d{3}\-\d{2}\-\d{2}$/;
    return regex.test(number)
}