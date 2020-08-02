var countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Andhra", "Rajastan", "Mumbai", "Assam");

// console.log(countries[countries.length - 1]);

// console.log(states.length);
states[0] = "Punjab";
// console.log(states);

var user =["divya", "divya@gmail.com", 3, 34, true];
//console.log(user);

user.pop();
user.pop();
// console.log(user);
user.unshift("NEW VALUE");
// console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("newyy")); //-1

console.log(Array.from("divya"))