console.log(this);

var user = {
    firstName: "Divya",
    courseCount: 4,
    getCourseCount: function() {
        console.log("Line 7", this);

        function sayHello() {
            console.log("Hello");

            console.log("Line 12", this);
        }
        sayHello();
    },
}
user.getCourseCount();