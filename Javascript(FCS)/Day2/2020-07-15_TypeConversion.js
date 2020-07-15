//1. To number Conversion

let val1 = '1234.654';

console.log(val1, typeof val1)
val1 = Number(val1);
console.log(val1, typeof val1)
console.log(Number(true));
console.log(Number(false));
console.log(parseInt(val1)); //converts into integer

//2. To String conversion
let str = 123;
console.log(str, typeof str);
str = String(str);
console.log(str, typeof str);
