import Canine from './Canine.js';

class Dog extends Canine {
    constructor(name, age, owner) {
        super(name, age);
        this.owner = owner;
    }

    makeNoise() {
        console.log('Making noise: woof woof!!');
    }
}

export default Dog;