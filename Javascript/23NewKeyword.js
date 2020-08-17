var User = function(firstName, courseCount) {

    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function() {
    console.log(`Your firstname is: ${this.firstName}`);
};


var divya = new User("divya", 2);
divya.getCourseCount();
divya.getFirstname();
// console.log(divya);

var sam = new User("Sam", 1);
// console.log(sam);
sam.getCourseCount();
sam.getFirstname();