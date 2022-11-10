const makePairs = function (object) {
    return Object.keys(object).map(key => [key, object[key]])
};

const data = { a: 1, b: 2 };
console.log(makePairs(data)); // [['a', 1], ['b', 2]]