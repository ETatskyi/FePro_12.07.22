var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

function removeСhar(str) {
    let accum = '', newStr = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] == " " || str[i].toLowerCase() !== str[i].toUpperCase()) {
            accum += str[i];
        }
    }

    for (let i = 0; i < accum.length; i++) {
        if (accum[i] == ' ' && accum[i - 1] == ' ') {
            continue
        }

        newStr += accum[i]
    }

    return newStr
};

console.log(removeСhar(str)); // "every hunter wishes to know"


//smaller variant:

// function removeСhar(str) {
//     return str.split('').map(el => el == " " || el.toLowerCase() !== el.toUpperCase() ? el : '').join('')
// };