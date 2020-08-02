var user = {
    name : "Satya",
    age  : 21,
    role : "Admin",
    loginCount : 32,
    facebookSignedIn :true
};
console.log(user.facebookSignedIn);
// console.log(user["role"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.table(user);