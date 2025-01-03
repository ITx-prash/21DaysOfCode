# Day 6: Higher-Order Functions and Array Methods

Higher-order functions are a key concept in JavaScript, offering flexibility and composability in coding. A function is considered higher-order if it:

- Takes one or more functions as arguments
- Returns a function as its result
- Or both

### Example: Higher-Order Function with `.forEach`
The `.forEach` method is a higher-order function. It takes a function as an argument and applies it to each element in the array.

```javascript
const arr = ["pras", "ram", "Hari", "ram"];
arr.forEach((name) => {
  if (name === "ram") {
    console.log("found");
  } else {
    console.log("not");
  }
});
```

---

## Some Useful Array Methods

### 1. `filter()`
The `filter()` method returns a new array with elements that pass a specific condition. Unlike `forEach`, it doesn't just iterate but gives a filtered result.

#### Task: Filter Numbers from an Array

```javascript
function filter(arr) {
  return arr.filter((item) => {
    return typeof item === "number";
  });
}
console.log(filter(["ram", "hari", 45, 4.5, true, 1]));

// OR

function filterNumbers(arr) {
  return arr.filter((items) => typeof items === "number");
}
const filteredArray = filterNumbers(["ram", "hari", 45, 4.5, true, 1]);
console.log(filteredArray);
```

> **Note:** Arrow functions can have implicit returns if the function body is a single line and curly braces are omitted.

---

### 2. `Set()`
A `Set` in JavaScript is a collection of unique values. It's perfect for removing duplicates from arrays.

#### Task: Remove Duplicates from an Array

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)]; // Converts Set back to an array
}

const numbers = [4, 6, 4, 8, 9, 1, 8, 7, 1];
console.log(removeDuplicates(numbers));
// Output: [4, 6, 8, 9, 1, 7]
```

---

### 3. `flat()`
The `flat()` method flattens nested arrays. By default, it flattens up to one level, but we can specify a depth or use `Infinity` to flatten completely.

#### Task: Flatten Nested Arrays

```javascript
function flattenArray(arr) {
  return arr.flat(2); // Flattens up to 2 levels
  // return arr.flat(Infinity); // Flattens completely
}

const filteredArray2 = flattenArray([4, 6, 4, [5, 2]]);
const filteredArray3 = flattenArray([4, 6, 4, [5, 2, 7, [4, 9, 5]]]);

console.log(filteredArray2);
console.table(filteredArray3);
```

> **Note:** Using `arr.flat(Infinity)` ensures all levels of nested arrays are flattened.

---

### 4. `reverse()`
The `reverse()` method reverses the order of elements in an array. Be cautious: it modifies the original array unless we use techniques like spreading.

#### Task: Reverse an Array
*There's inline return of the arrow function.*
```javascript
// Using spread in parameter:
const reverseArray = ([...arr]) => arr.reverse();

// Using spread in function body:
const reverseArray2 = (arr) => [...arr].reverse();

// Without spread (modifies original):
const reverseArray3 = (arr) => arr.reverse();

// Test
const nums = [1, 2, 3, 4, 5];
console.log(reverseArray(nums), nums); // [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]
console.log(reverseArray2(nums), nums); // [5, 4, 3, 2, 1], [1, 2, 3, 4, 5]
console.log(reverseArray3(nums), nums); // [5, 4, 3, 2, 1], [5, 4, 3, 2, 1]
```

---


