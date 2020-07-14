/*
Explain various methods in console
*/

//Console is used for testing purpose

//1. console.log() - Writes data in the console.
console.log("Various methods in console")

//2. console.error() - writes an error message to the console.
console.error("Error message");

var obj = {"year":2020, "month":"july"};
console.error(obj);

//3. console.warn() - writes warning to the console.
console.warn("Warning");

var arr = ["javascript", "python", "java"];
console.warn(arr);

//4.console.asert() - writes assertion to console only if expression is false.
console.assert(6>5,"false"); //returns nothing, since expression is true
console.assert(5>6,"false"); //returns false , since expression is false

var arr = ["javascript", "python", "java"];
//console.assert(document.getElementById("demo"), arr);

//5.console.trace() - displays a trace that show how the code ended up at a certain point.
function traceFunction() {
    otherTraceFunction();
}

function otherTraceFunction() {
    console.trace();
}

//6. console.count() - writes to console, the number of times console.count() method is called
var arr = ["javascript", "python", "java"];
console.count(arr); //1

for(i=1;i<10;i++) {
    console.count();
}

//7. consle.countReset() - resets the console.count() to 1, when reset method is called. 
//   otherwise console.count() method continues the number of time that particular method is called.

function greet() {
    console.count();
}
greet();

greet();

console.count();
console.countReset();
console.count();

//8. console.info() - writes a message to the console.

console.info("Hello user");

//9. console.clear() - clears the console.

//console.clear();

//10. console.group() - indicates the start of a message group.

console.log("Group");
console.group();
console.log("Welcome to javascript world");
console.log("Start learning javascript");


//11. console.groupCollapsed() - indicates the start of a collapsed message group.
console.log("Group Collapsed");
console.groupCollapsed();
console.log("Welcome to javascript world");
console.log("Start learning javascript");

//12. console.groupEnd() - ends the group.

console.groupEnd();
console.log("Group collapsed ended");
console.groupEnd();
console.log("Group ended");

//13. console.time() - starts a timer in the console view.
//14. console.timeEnd() - ends the timer and returns the time taken for the execution to the console.
console.time();
console.log("hello");
console.timeEnd();

//15. console.table() - returns data in the tabular format.

var obj = {"year":2020, "month":"july"};
console.table(obj);

var arr = ["javascript", "python", "java"];
console.table(arr);







