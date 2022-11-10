const without = function (object, ...args) {
    for (let el of args) {delete object[el] }
    return object
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, 'b', 'c')); // { a: 1 }