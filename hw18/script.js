function palindrome(str) {
    return str.replaceAll(' ', '').toLowerCase().split('').join('') === str.replaceAll(' ', '').toLowerCase().split('').reverse().join('')
}

console.log(palindrome('racecar')); // true
console.log(palindrome('table')); // false
console.log(palindrome('Анна')); // true
console.log(palindrome('А роза упала на лапу Азора')); // true