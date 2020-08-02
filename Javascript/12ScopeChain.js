var name = "Divya";

console.log("Line number 3", name);

function sayName() {
    //var name = "Ms. D"
    console.log("Line number 6", name);
    sayNameTwo();

    function sayNameTwo() {
        //var name = "Ms. SD"
        console.log("Line number 11", name);
    }
}

sayName();