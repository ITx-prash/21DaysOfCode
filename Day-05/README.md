# Day 5: For-in, For-of, and ForEach Loops in JavaScript

## For-in Loop
The `for-in` loop is used to loop through an object's properties.

### Syntax:
```javascript
for (variable in object) {
  statement
}
```
- **`variable`**: A property name is assigned to this variable on each iteration.
- **`object`**: The object whose enumerable properties are iterated.
- **`statement`**: The block of code executed for each property.

The variable (e.g., `key`) iterates through the object's properties, acting as the key for each property in successive loops. The value of the key can be accessed using bracket notation.

### Example:
```javascript
let person = {
  First: "Prashant",
  "Last name": "Adhikari",
  class: 5,
  level: "Novice",
};
let per = {};

for (const key in person) {
  console.log(key);
  console.log(person[key]); // Value of the current key
  per[key] = person[key];
  console.log(per[key]);
}
console.log(per);
```

### Exercise: Use a `for-in` loop to loop through an object
#### Task 1: Stop on a specific key
Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityNewPopulations`.
```javascript
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityNewPopulations = {};
for (const key in citiesPopulation) {
  if (key === "Berlin") {
    break;
  }
  cityNewPopulations[key] = citiesPopulation[key];
}
console.log(cityNewPopulations);
```

#### Task 2: Skip certain keys
Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
```javascript
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
```

## ForEach Loop
The `forEach` loop iterates through an array and executes a provided function once for each element. This function can be written in short form.

### Syntax:
```javascript
array.forEach((variable) => {
  // statements
});
```

### Example:
#### Task 1: Stop on a specific value
Write a `forEach` loop that iterates through the array `['earl grey', 'green tea', 'chai', 'oolong tea']`. Stop the loop when `'chai'` is found and store all previous tea types in an array named `availableTeas`.
```javascript
let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);
```

#### Task 2: Skip a specific value
Write a `forEach` loop that iterates through the array `['Berlin', 'Tokyo', 'Sydney', 'Paris']`, skips `'Sydney'`, and stores the other cities in a new array named `traveledCities`.
```javascript
let cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
cities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);
```

## For Loop
The traditional `for` loop is flexible for various iterations.

### Example:
#### Task 1: Skip specific values and perform operations
Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. Skip the value `7`, multiply the rest by 2, and store the results in a new array named `doubledNumbers`.
```javascript
let array = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    continue;
  }
  doubledNumbers.push(array[i] * 2);
}
console.log(doubledNumbers);
```

## For-of Loop
The `for-of` loop is designed to iterate through iterable objects like arrays.

### Example:
#### Task 1: Stop based on a condition
Write a `for-of` loop that iterates through the array `['chai', 'green tea', 'black tea', 'jasmine tea', 'herbal tea']`. Stop when the length of the current tea name is greater than 10 and store the teas iterated over in an array named `shortTeas`.
```javascript
let chais = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of chais) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
```
