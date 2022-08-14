function palindrome(str) {
    str = str.replaceAll(' ', '').toLowerCase().split('')
    return str.join('') === str.reverse().join('')
}

console.log(palindrome('racecar')); // true
console.log(palindrome('table')); // false
console.log(palindrome('Анна')); // true
console.log(palindrome('А роза упала на лапу Азора')); // true


// str = str.replaceAll(' ', '').toLowerCase()
// return str.split('').join('') === str.split('').reverse().join('')