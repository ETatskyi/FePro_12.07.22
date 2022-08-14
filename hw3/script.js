const num1 = prompt("enter first number");
const num2 = prompt("enter second number");
const num3 = prompt("enter third number");

const maxNumber = num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3;

console.log(maxNumber);