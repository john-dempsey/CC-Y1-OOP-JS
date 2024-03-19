import Canine from './Canine.js';

class Wolf extends Canine {
    constructor(name, age) {
        super(name, age);
    }

    makeNoise() {
        console.log('Making noise: howl howl!!');
    }
}

export default Wolf;