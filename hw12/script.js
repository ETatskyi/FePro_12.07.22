function compareString(str1, str2) {
    return str1.toLowerCase() == str2.toLowerCase();
};

console.log(compareString('string', 'StRiNg')); // true 
console.log(compareString('ABCDe', 'AbcdW'));   // false