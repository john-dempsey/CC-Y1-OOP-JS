class Car {
    constructor(brand, model, year, color, price, extras) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.extras = extras;
    }
    getDetails() {
        return `${this.brand} ${this.model} ` + 
        `(${this.year}) in ${this.color} ` + 
        `for ${this.price} EUR.\n` + 
        `It comes with the following extras: ` +
        `${this.extras.join(", ")}`;
    }
}

export default Car;