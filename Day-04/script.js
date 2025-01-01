// Array Basics
let myArray1 = ["Marvel", "DC", 1, 2, true];
console.log(myArray1);

// Push Example
let pushed = myArray1.push("Praz");
console.log(myArray1);
console.log(pushed);

// Pop Example
let popped = myArray1.pop();
console.log(myArray1);
console.log(popped);

// Data Type Copying Behavior
let countryList1 = ["Nepal", "India", "USA"];
let countryList2 = countryList1;
countryList2.pop();
console.log(countryList1);
console.log(countryList2);

// Spread Operator Example
const nestedNums = [2, 3, 4, [5, 6]];
const nestedNumsCopy = [...nestedNums];
nestedNumsCopy[3][0] = "Changed";
console.log(nestedNums);
console.log(nestedNumsCopy);

// Array Methods
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combinedNumbers = numbers1.concat(numbers2);
console.log(combinedNumbers);

let len = combinedNumbers.length;
console.log(len);

let namesList = ["Pras", "Praz", "Joe"];
namesList.shift();
console.log(namesList);

namesList.unshift("Don", "Mike");
console.log(namesList);

// Coding Challenges

// 1. Stop the Loop
let teaList1 = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teaList1.length; i++) {
  if (teaList1[i] === "chai") break;
  selectedTeas.push(teaList1[i]);
}
console.log(selectedTeas);

// 2. Skip an Element
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") continue;
  visitedCities.push(cities[i]);
}
console.log(visitedCities);

// 3. For-Of Stop Example
let numberSequence = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numberSequence) {
  if (num === 4) break;
  smallNumbers.push(num);
}
console.log(smallNumbers);

// 4. For-Of Skip Example
let teaList2 = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for (const tea of teaList2) {
  if (tea === "herbal tea") continue;
  preferredTeas.push(tea);
}
console.log(preferredTeas);
