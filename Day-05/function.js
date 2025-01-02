/*
1. Write a function named 'makeTea' that takes one
parameter, 'typeOfTea', and returns a string like
`"Making green tea"' when called with '"green tea"'.
Store the result in a variable named 'teaOrder'.
*/
function makeTea(typeOfTea) {
  // console.log(`Making ${typeOfTea}`);

  return `Making ${typeOfTea}.`;
}
// let tea= makeTea("green tea");
let teaOrder = makeTea("green tea");
// console.log(teaOrder);

//Note:
/*
let tea = prompt("Enter your tea:");
let pa = makeTea1(tea); 
// tea is an argument which carries/passes to 
//function during function calling.
function makeTea1(typeOfTea) {
  //- "typeOfTea" is an parameter, argument get passed and stored to it
  return `Making ${typeOfTea} tea`;
}
console.log(pa);
*/
/*

2. Create a function named `orderTea' that takes one
parameter, 'teaType'. Inside this function, create
another function named 'confirmOrder' that returns a
message like '"Order confirmed for chai"'.
Call 'confirmOrder' from within `orderTea' and return the
result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai.`;
  }
  //confirmOrder();//When a function doesn't explicitly return a value using the return statement, it automatically returns undefined
  return confirmOrder();
}
let orderConfirmation = orderTea("oolong tea");
console.log(orderConfirmation);

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/
//for giving name to arrow function we need to store it in a variable
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
//we can also write as below:
// const calculateTotal=(price,quantity)=>price*quantity;//if only one line of code is there then we can remove curly braces and return keyword which is known as implicit return
let total = calculateTotal(4, 5);
console.log(total);

//will learn higher order function next.
