/*
For_in loop:
The for-in loop is used to loop through an object's properties.
syntax:
for (variable in object) {
  statement
}
variable: A different property name is assigned to variable on each iteration.
object: The object whose enumerable properties are iterated.
statement: Code block containing the statements to be executed.
Here variable say (key) is the kind of variable which moves though each 
of the iteration of the loop and in first loop it acts as a key of the first 
property. Similarly, acts as second key in second loop and we can access the value of the respective key.
Accessing Keys and Values in an Object:
Iteration Over Keys:
The for-in loop iterates over all enumerable properties of an object. For each iteration, the loop variable (key) is assigned the name of a property (key) in the object.
Accessing Values:
To access the value associated with a key, we use bracket notation. For example, worldCities[key] gives us the value associated with the current key.
*/
//Example:
let person = {
  First: "Prashant",
  "Last name": "Adhikari",
  class: 5,
  level: "Novice",
};
let per = {};

for (const key in person) {
  console.log(key);

  console.log(person[key]); //1st iteration:Prashant is the value of key First
  per[key] = person[key]; //1st iteration:per[First]=Prashant
  console.log(per[key]); //1st iteration per[First]=Prashant:
}
console.log(per);
/*5. Use a for-in' loop to loop through an object
containing city populations.
Stop the loop when the population of `"Berlin"` is
found and store all previous cities' populations in a
new object named `cityNewPopulations`.
let citiesPopulation = {
"London": 8900000,
"New York": 8400000,
"Paris": 2200000,
"Berlin":3500000
};*/
//==>Answer:
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
// console.log(Object.keys(citiesPopulation)); //can see the keys only
// console.log(Object.values(citiesPopulation)); //can see the values only

let cityNewPopulations = {};
for (const key in citiesPopulation) {
  if (key === "Berlin") {
    break;
  }
  //key=value
  cityNewPopulations[key] = citiesPopulation[key]; //1st iteration:cityNewPopulations[London]=8900000
}
console.log(cityNewPopulations);
/* 6. Use a for-in' loop to loop through an object
containing city populations.
Skip any city with a population below 3 million and
store the rest in a new object named 'largeCities`.
let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
};
*/

let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Paris: 2200000,
  Berlin: 3500000,
};
let largeCities = {};
for (const key in worldCities) {
  if (worldCities[key] < 3000000) {
    continue;
  }
  largeCities[key] = worldCities[key];
}

console.log(largeCities);
//forEach Loop:
//syntax:
//array.forEach((variable_that_corresponds_array_element)=>{...});

/*
forEach loop can be used to iterate through an array and for each element in the array, it executes a provided function.
The function can be written in a short form as well.
The function is executed once for each array element
*/
/*7. Write a `forEach loop that iterates through the array
`["earl grey", "green tea", "chai", "oolong tea"]`.
Stop the loop when י "chai"` is found, and store all
previous tea types in an array named `availableTeas`.
*/
//==>Answer:
let teaCollection = ["earl gray", "green tea", "chai", "oolong tea"];
let availableTeas = [];
/*NOTE:
Short form of writing function
teaCollection.forEach(tea => {....});
*/
teaCollection.forEach((tea) => {
  if (tea === "chai") {
    //we can't use break and continue inside the function although it is inside forEach loop
    // "return" is kinda like continue than break in this case as it will skip the current iteration and move to the next one
    return; //the function is executed once for each array element so if chai is found it will return and not execute the next line i.e. like continue
  }
  availableTeas.push(tea);
});
//also can be written as below:
teaCollection.forEach(function (tea) {
  //function without name is called anonymous function
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

console.log(availableTeas);
//Theory:
//for-of and forEach loop are used to iterate through an array.
//for-in loop is used to iterate through an object.
//function inside forEach loop is executed once for each array element.

/*8. Write a `forEach` loop that iterates through the array
`["Berlin", "Tokyo", "Sydney", "Paris"]`.
Skip `"Sydney" and store the other cities in a new
array named 'traveledCities`.*/

let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let travelledCities = [];
cities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  travelledCities.push(city);
});
console.log(travelledCities);

/*9. Write a 'for' loop that iterates through the array
[2, 5, 7, 9]`.
Skip the value '7' and multiply the rest by 2. Store
the results in a new array named 'doubledNumbers'.
*/

let array = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    continue;
  }
  doubledNumbers.push(array[i] * 2);
}
console.log(doubledNumbers);

//can also do:
// for (const num of array) {
//   if (num==7){
// continue;
//   }
//   doubledNumbers.push(num*2)
// }
// console.log(doubledNumbers);

/*
10. Use a 'for-of' loop to iterate through the array
["chai", "green tea", "black tea", "jasmine tea", "herbal
tea"]'
and stop when the length of the current tea name is
greater than 10.
Store the teas iterated over in an array named
shortTeas .*/

// note:to get string length
// let fname="prash";
// console.log(fname.length); //5
//note that length is a property not a method so no need of parenthesis
let chais = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of chais) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
