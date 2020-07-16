/*

String and Array methods

*/

//split() - splits the sentence based on the character given.
var message = "Hello this is a simple message";
var splitMessage = message.split(" ");
console.log(splitMessage)


//replace() - replaces the first occurance of the character.
var replaceMessage = message.replace('i', 'u');
console.log(replaceMessage);


//strike() - return html value.
var strikeMessage = message.strike();
console.log(strikeMessage);


//substr() - returns characters from the beginning at a specified start position and 
            //through the specified number of character.
var substrMessage = message.substr(2, 6);
console.log(substrMessage);


//substring() - return the characters between two specified indices.
var subStringMessage = message.substring(2, 6);
console.log(subStringMessage);


//toLocaleLowerCase() - converts message into lowercase based on the host's locale.
var localeLowerCaseMessage = message.toLocaleLowerCase();
console.log(localeLowerCaseMessage);

//toLocaleUpperCase() - converts message into lowercase based on the host's locale.
var localeUpperCaseMessage = message.toLocaleUpperCase();
console.log(localeUpperCaseMessage);


//trim() - removes whitespace from both ends of a string.
var text = "    Javascript coding   ";
var trimMessage = text.trim();
console.log(trimMessage)


//concat() - join two or more strings
var concatString = text.concat(message);
console.log(concatString);


//includes() - returns true if it includes the given string/character
               //otherwise, returns false.
var includesMessage = message.includes('is');
console.log(includesMessage);


//Array methods

var arr = ["hello", 1, "divya", 2, "welcome"];
console.log(arr);

//Prints array elements to the browser.
document.getElementById("arraySample").innerHTML = arr[0];

//sort() - sorts array in ascending order.
var sortArray = arr.sort();
console.log(sortArray);

//printing all array elements
console.log("printing all the array elements")
var arrLen = arr.length;
text ="<ul>";
for(i=0;i<arrLen;i++) {
    text += "<li>" + arr[i] + "</li>";
}
text += "</ul>";
document.getElementById('arraElements').innerHTML = text;

//instanceof operator - returns true if an object is created by a given constructor.

var instanceMsg = arr instanceof Array;
console.log(instanceMsg);

//toString() - converts array to string
var toStringMsg = arr.toString();
console.log(toStringMsg)


//adds element to the starting
var arr = ["hello", 1, "divya", 2, "welcome"];
arr.unshift("java");
console.log(arr);
arr.shift(); //removes the first element.
console.log(arr);


//splice() - used to add new items to an array.
//firstValue - position of elements to be added, secondValue - number of items to be removed after new elements added.
 var arr = ["hello", 1, "divya", 2, "welcome"];
arr.splice(1, 0, "javascript", "python" );
console.log(arr);

//removes the elements till index 2
var arr = ["hello", 1, "divya", 2, "welcome"];
arr.splice(0, 3);
console.log(arr);


//concat() - creates a new array by merging existing arrays.
var arr1 = ["hello", 1, "divya", 2, "welcome"];
var arr2 = ["java", "python", "javascript"];
var newArray = arr1.concat(arr2);
console.log(newArray);


//slice() - method slices out a piece of an array into a new array.
var arr = ["java", "python", "javascript", "jsp", "html"];
var slicedArray = arr.slice(0, 2);
console.log(slicedArray);





