const myStates = [
    "Andhra Pradesh", 
    "Delhi", 
    "Hyderbad", 
    1947,
    "Tamil Nadu", 
    "Assam"
];

// for( const n of myStates) {
//     console.log(n);
// }

const symbols = {
    AP: "Andhra Pradesh",
    TN: "Tamil Nadu",
    TS: "Telengana",
    MH: "Maharastra"
}

for(const n in symbols) {
    console.log(`Key is: ${n} and value is: ${symbols[n]}`);
}