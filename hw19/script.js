const isPlainObject = function (element) {
    return element? element.constructor == Object: false
};

// const isPlainObject = function (element) {
//     return Object.prototype.toString.call(element)=='[object Object]'
// };


const data = { a: 1 };
console.log(isPlainObject(data)); // true
// console.log(isPlainObject(null)); // true
// console.log(isPlainObject(new Date)); // true

