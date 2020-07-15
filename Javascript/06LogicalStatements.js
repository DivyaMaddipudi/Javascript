/*
Allow user to purchase the course if:
1.User loggedin
2.Email verified
3.Card info is true

Otherwise reject the course payment

*/

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

if(isLoggedIn && isEmailVerified && cardInfo) {
    console.log("Allow user to purchase the course");
} else {
    console.log("Don't allow user to purchase the course");
}