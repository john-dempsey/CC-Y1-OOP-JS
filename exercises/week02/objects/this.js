//====================================================================
// the value of the variable 'this' outside a function or method
//====================================================================
console.log("1", this);

//====================================================================
// the value of the variable 'this' inside a function
//====================================================================
function greeting() {
    console.log("2", this);
}

greeting();

//====================================================================
// the value of the variable 'this' inside a method
//====================================================================
let myObj = {
    firstName: "Alejandro",
    lastName: "Chan",

    greeting() {
        console.log("3", this);
    },

    delayedGreeting() {
        setTimeout(function () {
            console.log("4", this);
        }, 3000)
    },

    delayedGreetingArrow() {
        setTimeout(() => {
            console.log("5", this);
        }, 3000)
    }
};

myObj.greeting();
myObj.delayedGreeting();
myObj.delayedGreetingArrow();

//====================================================================
// the value of the variable 'this' inside an event handler
//====================================================================
let myBtn = document.getElementById("my_button");
myBtn.addEventListener("click", onButtonClick);

function onButtonClick(e) {
    console.log("6", this);
}

myBtn.click();