const minValue = 10;
const maxValue = 20;

for (let i = minValue; i <= maxValue; i++) {
    document.write(i)
    i != maxValue ? document.write(`, `) : ''
}

document.write('<br>');

for (let i = maxValue; i >= minValue; i--) {
    document.write(i)
    i != minValue ? document.write(`, `) : ''
}
