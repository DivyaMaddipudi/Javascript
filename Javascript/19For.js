// for(let i=0; i<10; i++) {
//     console.log(i);
// }

const myStates = [
    "Andhra Pradesh", 
    "Delhi", 
    "Hyderbad", 
    1947,
    "Tamil Nadu", 
    "Assam"
];

for(let i=0;i<myStates.length;i++) {

    if(typeof myStates[i] !== "string") continue;
    console.log(myStates[i]);   
}

