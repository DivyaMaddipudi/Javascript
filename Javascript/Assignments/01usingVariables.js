const uID = "123ab";

var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");

var email = prompt("Enter Email");
var password = prompt("Enter Password");
var confirmPassword = prompt("Confirm Password");
if(password == confirmPassword) {
    console.log("Password Matched")
}
var country = prompt("Enter Country");

var isLoggedFromGoogle = false;
var isLoggedFromFacebook = false;

console.log(`
    uID is : ${uID} 
    FullName is : ${firstName, lastName}
    Email is : ${email}
    
    isGoogleAccountLinked: ${isLoggedFromGoogle}
    isFacebookAccountLinked: ${isLoggedFromFacebook}

`)


