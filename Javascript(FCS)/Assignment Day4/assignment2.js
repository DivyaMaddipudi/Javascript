const student = {
    'name': 'Helsinki',
    'age': 24,
    'projects': {
        'diceGame': 'Two player dice game using javascript'
    }
}

for(let key in student) {
    console.log(key, student[key]);
}
console.log(student.projects, student.projects.diceGame);