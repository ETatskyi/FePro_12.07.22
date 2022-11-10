function isUpperCase(str, character) {
    if (!character || !str) return 'Error: All arguments are required';
    return str.charAt(character).toUpperCase() === str.charAt(character);
};

console.log(isUpperCase('tasks JavaScript', 6)); // true