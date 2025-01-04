**Primitive Data Types and Arrays in JavaScript**
=====================================================
### Why it's actually called primitive datatype?
Primitive actually means immutable data types i.e. the value they hold cannot be changed, without making a new memory address i.e. not possible to change in the original memory address. Unlike, non-primitive/reference datatype which can be altered.

*C is going on in college just learning js while comparing it with C.*

In C, arrays are fixed-size, contiguous blocks of memory where each element must be of the same data type. This is because C needs to know exactly how many bytes to allocate for each element and how to interpret the bits at each position.
For example, in C:
```c
int numbers[4] = {1, 2, 3, 4}; // Each element takes exactly 4 bytes (typically)
```
JavaScript, however, handles arrays very differently:
1. **Arrays are Objects:** In JS, arrays are actually objects where the indices are properties (keys) and the values can be of any type. a key value pair where index points to the memory address.

2. **Memory Management:** Instead of storing values directly in a contiguous block, JavaScript arrays store references (pointers) to values. Each array element is essentially a pointer that can point to any type of data stored elsewhere in memory.
### Example
```javascript
let myArray1 = ["Marvel", "DC", 1, 2, true];
console.log(myArray1);
```
### Array Methods
1. `push()`: Adds one or more elements to the end of an array and returns the new length of the array.
```javascript
let pushed = myArray1.push("Praz");
console.log(myArray1); // Output: ["Marvel", "DC", 1, 2, true, "Praz"]
console.log(pushed); // Output: 6
```
2. `pop()` : Removes the last element from an array and returns that element.
```javascript
let popped = myArray1.pop();
console.log(myArray1);
console.log(popped);
```

## Data Type Copying Behavior

### Primitive Types
Primitive types create **independent copies** (deep copy):
```javascript
let a = 5;
let b = a; // b gets its own copy of 5 independent of 'a'
```

### Reference Types
Reference types copy **references** to the original data (shallow copy):
```javascript
let countryList1 = ["Nepal", "India", "USA", "Canada"];
let countryList2 = countryList1; // countryList2 points to the same array as countryList1
countryList2.pop();
console.log(countryList1); // ["Nepal", "India", "USA"]
console.log(countryList2); // ["Nepal", "India", "USA"]
```

### Reference Data Type Copying in Detail
```javascript
const originalArray = ["ram", "hari", "gita"];
const copiedArray = [...originalArray]; //this one is spread operator
copiedArray.pop();
console.log(originalArray); //[ 'ram', 'hari', 'gita' ]
console.log(copiedArray); //[ 'ram', 'hari' ]
```
In above, it seems like it has made a deep copy,
but actually, that's not a deep copy - that's still a shallow copy for 
primitive values like strings. The spread operator works perfectly for creating 
a new array with primitive values, which might make it seem like a deep copy.

The key distinction becomes clear when we have nested arrays or objects:
```javascript
const nestedNums = [2, 3, 4, [5, 6]];
const nestedNumsCopy = [...nestedNums];
console.log(nestedNums); //[ 2, 3, 4, [ 5, 6 ] ]
nestedNumsCopy[3][0] = "Prash"; //to access the first element inside the 3rd index
console.log(nestedNums); //[ 2, 3, 4, [ 'Prash', 6 ] ]
```
--> For primitive values like strings, numbers, and booleans, the spread operator 
creates what appears to be a completely independent copy. But for nested objects 
or arrays, it still maintains references to the original nested structures.

## Array Methods

### 1. `concat()`
Merges two arrays:
```javascript
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combinedNumbers = numbers1.concat(numbers2);
console.log(combinedNumbers); // [1, 2, 3, 4, 5, 6]
```

### 2. `length`
Calculates array length (a property, not a method):
```javascript
let len = combinedNumbers.length;
console.log(len); // 6
```

### 3. `shift()`
Removes the first element of an array:
```javascript
let namesList = ["Pras", "Praz", "Joe"];
namesList.shift();
console.log(namesList); // ["Praz", "Joe"]
```

### 4. `unshift()`
Adds elements to the beginning of an array:
```javascript
namesList.unshift("Don", "Mike");
console.log(namesList); // ["Don", "Mike", "Praz", "Joe"]
```

### For Loop Example
Iterating over an array using a `for` loop:
```javascript
let citiesList = ["Paris", "New York", "Tokyo", "London"];
let citiesOutput = [];
for (let i = 0; i < citiesList.length; i++) {
  console.log(citiesList[i]);
  citiesOutput.push(citiesList[i]);
}
console.log(citiesOutput); // ["Paris", "New York", "Tokyo", "London"]
```