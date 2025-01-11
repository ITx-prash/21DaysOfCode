// Array Basics
let myArray1 = ["Marvel", "DC", 1, 2, true];
console.log(myArray1); // ["Marvel", "DC", 1, 2, true]

// Push Example
let pushed = myArray1.push("Praz");
console.log(myArray1); // ["Marvel", "DC", 1, 2, true, "Praz"]
console.log(pushed); // 6

// Pop Example
let popped = myArray1.pop();
console.log(myArray1);  // ["Marvel", "DC", 1, 2, true]
console.log(popped);  // Praz

// Data Type Copying Behavior
let countryList1 = ["Nepal", "India", "USA"];
let countryList2 = countryList1; // Copy by reference, alter the original array
countryList2.pop();
console.log(countryList1); // ["Nepal", "India"]
console.log(countryList2); // ["Nepal", "India"]

// Spread Operator Example
//creates a shallow copy(reference to the original) for nested arrays and objects
const nestedNums = [2, 3, 4, [5, 6]];
const nestedNumsCopy = [...nestedNums];
nestedNumsCopy[3][0] = "Changed";
console.log(nestedNums);// [2, 3, 4, ["Changed", 6]]
console.log(nestedNumsCopy);// [2, 3, 4, ["Changed", 6]]

// Array Methods
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combinedNumbers = numbers1.concat(numbers2);
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6]

let len = combinedNumbers.length;
console.log(len); // 6

let namesList = ["Pras", "Praz", "Joe"];
namesList.shift();
console.log(namesList); // ["Praz", "Joe"]

namesList.unshift("Don", "Mike");
console.log(namesList); // ["Don", "Mike", "Praz", "Joe"]

// Coding Challenges

// 1. Stop the Loop
let teaList1 = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teaList1.length; i++) {
  if (teaList1[i] === "chai") break;
  selectedTeas.push(teaList1[i]);
}
console.log(selectedTeas); // ["green tea", "black tea"]

// 2. Skip an Element
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") continue;
  visitedCities.push(cities[i]); // ["London", "New York", "Berlin"]
}
console.log(visitedCities);

// 3. For-Of Stop Example
let numberSequence = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numberSequence) {
  if (num === 4) break;
  smallNumbers.push(num);
}
console.log(smallNumbers); // [1, 2, 3]

// 4. For-Of Skip Example
let teaList2 = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of teaList2) {
  if (tea === "herbal tea") continue;
  preferredTeas.push(tea);
}
console.log(preferredTeas); // ["chai", "green tea", "black tea"]
