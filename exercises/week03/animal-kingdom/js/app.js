import Cat from './classes/Cat.js';
import Dog from './classes/Dog.js';
import Lion from './classes/Lion.js';
import Wolf from './classes/Wolf.js';

let cat1 = new Cat('Whiskers', 3, "Jane");
let dog1 = new Dog('Fido', 5, "Ben");
let lion1 = new Lion('Elsa', 3);
let wolf1 = new Wolf('Akira', 5);

let animals = [cat1, dog1, lion1, wolf1];
animals.forEach(animal => {
    console.log(animal);
    animal.sleep();
    animal.makeNoise();
    animal.roam();
});