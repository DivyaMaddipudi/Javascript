var user = {
    name : "Satya",
    age  : 21,
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },

    getCourseCount: function () {
        return `${this.name} is enrolled in total of ${this.courseList.length} courses`;
    },

    info: function () {
        return `
                Name: ${this.name}
                Age: ${this.age}
                Role: ${this.role}
                loginCpunt: ${this.loginCount}
                facebookSignedIn: ${this.facebookSignedIn}
                courseList: ${this.courseList}`
    }
};


// console.log(user.facebookSignedIn);
// console.log(user["role"]);

// console.log(user.loginCount);
// user.loginCount = 44;
// console.log(user.loginCount);

// console.table(user);

console.log(user.getCourseCount());
user.buyCourse("Javascript");
console.log(user.getCourseCount());
console.log(user.info());