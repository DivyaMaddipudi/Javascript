console.log("Functions");

/*
function functionName(param if any) {
    ........body of the function
}
*/
function hello() {
    console.log("hello from a function");
}
hello();

let greet = function() {
    console.log("I am a function greet function");
}
greet();

//function with params

let welcome = function(name="stranger") {
    console.log(`Hello ${name}`);
}
welcome("Divya");

let addition = function(num1=0, num2=0) {
    let sum = num1 + num2;
    return sum;
}
let result = addition(5, 6);
console.log(result);
