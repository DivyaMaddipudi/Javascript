var user = "admin";

switch(user) {
    case "admin":
        console.log("get full access");
        break;
    case "subAdmin":
        console.log("get access to create/delete the courses");
        break;
    case "testPrep":
        console.log("get access to create/delete the tests");
        break;
    case "user":
        console.log("get access to consume the content");
        break;
    default:
        console.log("trail user");
        break;
}