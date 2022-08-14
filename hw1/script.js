let first = prompt('enter first value');
let second = prompt('enter second value');

let buffer = second;
second = first;
first = buffer;

console.log(`first = ${first}, second = ${second}`)