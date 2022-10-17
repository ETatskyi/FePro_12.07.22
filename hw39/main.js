const sumAllNumbers = (...num) => {
    
    return num.reduce((prev, curr) => {

        if (typeof (prev + curr) != 'number') {
            return 'Error! You can use only numbers.';
            // return new Error('Error! You can use only numbers.')
        }

        return prev + curr;
    }, 0)
}

console.log(sumAllNumbers(1)) // 1
console.log(sumAllNumbers(1, 2, 3)) // 6
console.log(sumAllNumbers(1, 2, 3, 1, 2, 1, 10)) // 20
console.log(sumAllNumbers(1, '2', 3)) // Error! You can use only numbers.
console.log(sumAllNumbers([1, 2])) // Error! You can use only numbers.
console.log(sumAllNumbers({ number: 1 })) // Error! You can use only numbers.