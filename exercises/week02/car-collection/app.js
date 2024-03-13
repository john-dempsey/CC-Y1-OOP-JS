import Car from "./classes/Car.js";

let bmw = new Car("BMW", "5 Series", 2019, "Green", 12000.00, ["leather seats", "automatic AC", "parking sensors"]);
let skoda = new Car("Skoda", "Octavia", 2016, "Blue", 10000.00, ["manual AC", "parking sensors"]);
let vw = new Car("VW", "Golf", 2018, "Red", 15000.00, ["leather seats", "automatic AC"]);
let audi = new Car("Audi", "A4", 2017, "Black", 18000.00, ["heated seats", "automatic AC", "parking sensors"]);

let carCollection = [bmw, skoda, vw, audi];
carCollection.forEach(car => console.log(car.getDetails()));
