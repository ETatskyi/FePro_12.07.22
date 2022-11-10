const str = "lorem ipsum, dolor sit amet consectetur adipisicing elit. quia, aliquid!"

const newString = str.split(' ')
    .map(el => el[0].toUpperCase() + el.substring(1))
    .join(' ');

// console.log(str)
// console.log(newString)