class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sleep() {
        console.log('Sleeping...zzzzzzzzzzzz');
    }

    makeNoise() {
        console.log('Making noise!');
    }

    roam() {
        console.log('Roaming about.');
    }
}

export default Animal;