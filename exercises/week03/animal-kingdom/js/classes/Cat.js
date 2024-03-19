import Feline from './Feline.js';

class Cat extends Feline {
    constructor(name, age, staff) {
        super(name, age);
        this.staff = staff;
    }

    makeNoise() {
        console.log('Making noise: meow meow!!');
    }
}

export default Cat;