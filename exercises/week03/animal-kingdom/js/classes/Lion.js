import Feline from './Feline.js';

class Lion extends Feline {
    constructor(name, age) {
        super(name, age);
    }

    makeNoise() {
        console.log('Making noise: roar roar!!');
    }
}

export default Lion;