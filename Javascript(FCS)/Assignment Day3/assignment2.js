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

var arr = ["hello", 1, ["welcome", 2]];
console.log(arr);

//
