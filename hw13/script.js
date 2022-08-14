function limitStr(str, n, symb) {
    symb = symb ? symb : '...';
    return !n ? str : str.substring(0, n - symb.length) + symb
};

console.log(limitStr('Каждый охотник желает знать.')); // Каждый охотник желает знать.
console.log(limitStr('Каждый охотник желает знать.', 17)); // Каждый охотник...
console.log(limitStr('Каждый охотник желает знать.', 22, '!')); // Каждый охотник желает!