const unique = (array) => {
    return array.filter((element, index) => array.indexOf(element) === index)
}

const data = [1, 2, 1, 2, 3];
console.log('data', unique(data)); // [1, 2, 3]