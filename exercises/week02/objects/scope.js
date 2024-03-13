let x = 10;
let y = 20;
let z = 30;

function f() {
    console.log("In function ================================================");
    let y = 25;
    z = z + 5;
    if (true) {
        let y = 50;
    }
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("z = " + z);
    console.log("============================================================");
};

console.log("Before calling function");
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);

f();

console.log("After calling function");
console.log("x = " + x);
console.log("y = " + y);
console.log("z = " + z);