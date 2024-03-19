import Animal from './Animal.js';

class Feline extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    roam() {
        console.log('Roaming about on my own.');
    }
}

export default Feline;