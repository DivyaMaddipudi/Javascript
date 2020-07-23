var getUserRole = function (name, role) {
    switch(role) {
        case "admin":
            return `${name} with full access`;
            break; //break is not necessary
        case "subAdmin":
            return `${name} with access to create/delete the courses`;

            break;
        case "testPrep":
            return `${name} with access to create/delete the tests`;

            break;
        case "user":
            return `${name} with access to consume the content`;
            break;
        default:
            return `${name} with trail access`;
            break;
    }
}

console.log(getUserRole("divya", "admin"));

var getRole = getUserRole("satya", "user");
console.log(getRole);