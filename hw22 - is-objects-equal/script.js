const isEqual = function (firstObject, secondObject) {
    return Object.keys(firstObject).map(key => firstObject[key] == secondObject[key]).every(result => !!result)
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false