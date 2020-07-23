//Falsy Values:
// undefined
// null
// 0
// ''
// NaN 

var user;

if(user) {
    console.log("enter the loop");
    //does not enter the loop
}

var num = "2";

if(2 == "2") {
    console.log("enter the loop - 2");
    //enters the loop
}

if(2 === "2") {
    console.log("enter the loop - 2");
    //does not enters the loop
}