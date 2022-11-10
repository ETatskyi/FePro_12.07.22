const myObjectAssign = (...arr) => {
    let output = {};

    for (obj of arr) {
        for (key in obj) {
            output[key] = obj[key];
        }
    }

    return output
}


const myObjectAssign2 = (...arr) => {
    return arr.reduce((prev, curr) => {
        return { ...prev, ...curr }
    }, {})
}