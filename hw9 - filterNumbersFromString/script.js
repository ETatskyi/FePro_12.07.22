const userString = 'sdfh23531               213v%##*#$@41!#%2313vc';

function filterNumbers(str) {
    let out = ''
    for (let i = 0; i <= str.length; i++) {
        out += !isNaN(parseInt(str[i])) ? str[i] : ''
    }
    return out
}

console.log(filterNumbers(userString))