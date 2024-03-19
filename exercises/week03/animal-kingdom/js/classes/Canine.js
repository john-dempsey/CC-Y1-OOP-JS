import Animal from './Animal.js';

class Canine extends Animal {
    constructor(name, age) {
        super(name, age);
    }

    roam() {
        console.log('Roaming about with my pack.');
    }
}

export default Canine;