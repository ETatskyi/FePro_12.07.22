class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {console.log(`My name is ${this.name}`)}
}

class Cat extends Animal {
    sayHello() {console.log(`Hello from ${this.name}, I am a cat`)}
}

class Dog extends Animal {
    sayHello() {console.log(`Hello from ${this.name}, I am a dog`)}
}