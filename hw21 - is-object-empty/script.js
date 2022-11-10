const isEmpty = function (object) {
    return Object.keys(object).length == 0 || Object.keys(object).some(key => !object[key])
};

const data = { a: 1, b: undefined };
const data2 = { a: 1, b: 5 };
const data3 = {};

console.log(isEmpty(data)); // true
console.log(isEmpty(data2)); // false
console.log(isEmpty(data3)); // true