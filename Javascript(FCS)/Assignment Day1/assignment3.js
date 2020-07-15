/*

Datatypes in javascript 
    1. Primitive Datatypes:
        1. String
        2. Number
        3. Boolean
        4. Undefined
    2. Complex Datatypes:
        1. Object - Arrays, Objects, null
        2. Function - Functions

*/
//1. String
var value = 20 + "hello"; //When adding a number and a string, JavaScript will treat the number as a string.
console.log("type of", value, "is: ", typeof value );

//2. Number
//JavaScript has only one type of numbers.
//Numbers can be written with, or without decimals

var x = 10;
console.log("type of",x, "is: ", typeof x );

//Extra large or extra small numbers can be written with scientific (exponential) notation:
var y = 10e5;
var z = 10e-5;
console.log("type of",y, "is: ", typeof y );
console.log("type of",z, "is: ", typeof z );


//3. boolean
var x = 5;
var y =6;
var z = x > y;
console.log("type of",z, "is: ", typeof z);

//4. Arrays

var arr = ["javascript", "python", "java"];
console.log("type of",arr, "is: ", typeof arr);

//5. Objects - Object properties are written as key:value pairs, separated by commas.
var date = new Date();
dateValue = date.getDate();
yearValue = date.getFullYear();
monthValue = date.getMonth() + 1;

var obj = {"year":yearValue, "month":monthValue, "date":dateValue};
console.log("type of",obj, "is: ", typeof obj);

//6. Null
var obj = null;
console.log("type of",obj, "is: ", typeof obj);

//7. undefined

var undefinedValue;
console.log("type of",undefinedValue, "is: ", typeof undefinedValue);

//8. Function 

var functionVariable = function isCheck() {
    
}
console.log("type of", functionVariable, "is: ", typeof functionVariable);