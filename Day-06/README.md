# Day 6: Higher-Order Functions and Array Methods
## Lexical Scoping

Lexical scoping refers to the scope of a variable being determined by its position within the source code. In JavaScript, a variable defined inside a function is only accessible within that function and any nested functions. This is because JavaScript uses lexical scoping, meaning the scope is defined at the time of writing the code, not at runtime.
Example:
```javascript
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable); // Can access outerVariable
  }

  innerFunction();
}

outerFunction(); // Output: I am outside!
```
In this example, innerFunction can access outerVariable because it is defined within the lexical scope of outerFunction.

## Closures

Closures are functions that retain access to their enclosing scope, even after the outer function has completed execution. It's like a backpack of variables that a function carries around with it.

**Example:**
```javascript
function greetUser(name) {
  function showName() {
    console.log(`Your name is ${name}`);
  }
  return showName; // return the function definition itself without calling it
}

const myName = greetUser("John"); // myName is now a function with preserved access to the name variable
console.log(myName);

myName(); // Your name is John

```
In this example, the outer function `greetUser` takes a parameter `name` and returns an inner function `showName`. The inner function retains access to the `name` parameter, even after the `name` function has finished execution. When `myName` is invoked, it logs the message with the preserved `name` value.

**Deeper Dive:**

When the return statement executes:
- The outer function's execution context is indeed destroyed.
- The variable `name` should be destroyed as well (kinda).
  
**BUT!** JavaScript creates a special "closure scope":

- This closure scope contains the variables that the inner function references (`name` in this case).
- The inner function maintains a reference to this closure scope, not to the original execution context.
- This is why the inner function can still access `name` even after the `name` function has finished executing.
- Closure doesn't preserve the entire execution context, but rather just the specific variables it needs in a closure scope.

This is why closures are memory-efficient: they only retain what's necessary, not the entire scope of the outer function.


## Higher-order functions

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

The `filter()` method is a higher-order function that accepts a callback function as its argument. The callback function is called with each element in the array, and the elements that return `true` are included in the new array.

#### Example

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNums = nums.filter((value) => value % 2 === 0);
console.log(evenNums); // Output: [2, 4, 6, 8, 10]
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


