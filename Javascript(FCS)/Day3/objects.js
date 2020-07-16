console.log("Objects");

let person = { 
    name:'Professor',
    skills: ['heist', 'planning'],
    teamCount:8,
    canFly:false,

};
console.log(person);

//Accessing values
console.log(person['name']);
console.log(person.name);

for(key in person) {
    console.log(person['teamCount']);
}


