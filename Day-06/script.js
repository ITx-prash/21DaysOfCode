/*4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(typeofTea) {
    return `maketea: ${typeofTea}`;
  }
function processTeaOrder(makeTeaFunc) {
  return makeTeaFunc("earl grey");
}

let order = processTeaOrder(makeTea);//program flow goes from line 11 to line 7,8 and then to line 4,5 
console.log(order);
//Flow in detail:
/*
1. First, let order = processTeaOrder(makeTea) is executed
-The makeTea function is passed as an argument to processTeaOrder
2. Then inside processTeaOrder:
- makeTeaFunc parameter receives the makeTea function
- makeTeaFunc("earl grey") is called, which actually executes makeTea("earl grey")
3. Finally, inside makeTea:
- typeofTea receives "earl grey"
- Returns the string "maketea: earl grey"
*/

/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));
