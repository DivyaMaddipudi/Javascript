/*
Differences between var, let and const ?

1. var declarations are globally scoped or function scoped while let and const are block scoped.
2. var variables can be updated and re-declared within its scope; 
   let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.
3. While var and let can be declared without being initialized, const must be initialized during declaration.

*/

if (true) {
    var varValue = 'hello!';
    let letValue = 'letvalue';
    const constValue = 'constvalue';
  
    console.log(varValue); // 'hello!';
    console.log(letValue); // 'letvalue';
    console.log(constValue); // 'constvalue';
  }
   
  console.log(varValue); // 'hello!';
  console.log(letValue); // ReferenceError: letValue is not defined
  console.log(constValue); // ReferenceError: constValue is not defined
  