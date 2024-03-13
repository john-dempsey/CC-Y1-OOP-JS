let myCar = {
    make: "Ford",
    model: "Mustang",
    year: 2024,
    options: ["HUD", "Heated seats"]
};

let user = {
    firstName: "John",
    lastName: "Jones",
    age: 25,
    hobbies: ["Gym", "Movies"],
    friends: [
        {
            firstName: "Sam",
            lastName: "Smith",
            age: 24
        },
        {
            firstName: "Omar",
            lastName: "Iqbal",
            age: 26
        },
        {
            firstName: "Lei",
            lastName: "Feng",
            age: 25
        }
    ],

    greeting() {
        console.log(`Hello, my name is ${this.firstName}`);
    },

    getDetails: function () {
        return (
            this.firstName + " " + 
            this.lastName + " is " + 
            this.age + " years old."
        );
    }
};

console.log(
    user.firstName + " " + 
    user.lastName + " is " + 
    user.age + " years old."
);
console.log("His hobbies are " + user.hobbies.join(", "));
console.log("His friends are: ");
user.friends.forEach(friend => {
    console.log(
        "\t" + friend.firstName + " " + friend.lastName + 
        " is " + friend.age + " years old."
    );
});

user.greeting();