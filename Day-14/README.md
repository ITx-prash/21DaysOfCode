## About Promises in JavaScript
Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create **callback hell**, leading to unmanageable code.

### A Promise is in one of these states:
- **Pending**: Initial state, neither fulfilled nor rejected.
- **Fulfilled**: Meaning that the operation completed successfully.
- **Rejected**: Meaning that the operation failed.

A promise is a returned object to which we attach callbacks, instead of passing callbacks into a function.

### Example:
```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = false; // here, it is false so will reject and print msg in catch method
  if (success) {
    resolve("Promise is resolved successfully");
  } else {
    reject("Promise is rejected");
  }
});

myPromise
  .then((value) => {
    console.log(value); // Promise is resolved successfully
  })
  .catch((error) => {
    console.error(error); // Promise is rejected
  });
```

In the above example:
- The promise is rejected, so the `catch()` method is called, and the error is printed to the console.
- If the promise were resolved, the `then()` method would be called instead.

### Chaining Promises
Promises can be chained using the `then()` method. If a promise returns another promise, you can chain them together.

#### Example:
```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // it is true so it will resolve and print the data fetched successfully
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data); // Data fetched successfully
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value); // data fetched successfully
  })
  .catch((error) => console.error(error));
```
In the above example:
- The `fetchData()` function returns a promise.
- If resolved, the data is processed and chained for further actions.
- If rejected, the error is handled in the `catch()` method.

*Will learn more later with projects.*

---

## Call, Apply, and Bind Methods

### 1. Call Method
The `call` method in JavaScript allows you to invoke a function with a specified `this` value and arguments provided individually. This is useful when you want to use a method from one object or outside it in the context of another object.

#### Example:
```javascript
let person1 = {
  name: "John",
  age: 30,
  address: "Nepal",
  mood: "Happy",
};

let greet = function (address, mood) {
  return `Hello, my name is ${this.name}, age is ${this.age}, address is ${address} and mood is ${mood}.`;
};

let person2 = {
  name: "Jane",
  age: 25,
};

// Using call to pass address and mood as arguments
console.log(greet.call(person1, person1.address, person1.mood));
// Output: Hello, my name is John, age is 30, address is Nepal and mood is Happy.

console.log(greet.call(person2, "USA", "Sad"));
// Output: Hello, my name is Jane, age is 25, address is USA and mood is Sad.
```

---

### 2. Apply Method
The `apply` method is similar to the `call` method. The difference is that `apply` requires the arguments to be passed as an array.

#### Example:
```javascript
let person3 = {
  name: "Rajesh",
  age: 30,
  address: "Nepal",
  mood: "Happy",
  greet(address, mood, mood_1) {
    return `Hello, my name is ${this.name}, age is ${this.age}, address is ${address} and mood is ${mood} and ${mood_1}.`;
  },
};

let person4 = {
  name: "Mike",
  age: 29,
};

// Using the apply method
console.log(person3.greet.apply(person4, ["Canada", "good", "excited"]));
// Output: Hello, my name is Mike, age is 29, address is Canada and mood is good and excited.
```

---

### 3. Bind Method
The `bind` method is used to create a new function that, when called, has its `this` keyword set to the provided value. Unlike `call` and `apply`, it does not immediately invoke the function but returns a new function.

#### Example:
```javascript
let person5 = {
  name: "Franklin",
  age: 30,
  address: "USA",
  mood: "Confused",
  mood_1: "Excited",
  greet(address, mood, mood_1) {
    return `Hello, my name is ${this.name}, age is ${this.age}, address is ${address} and mood is ${mood} and ${mood_1}.`;
  },
};

let person6 = {
  name: "Michael",
  age: 39,
};

// Using the bind method
let newFunction = person5.greet.bind(person6, "Canada", "bad", "frustrated");
console.log(newFunction());
// Output: Hello, my name is Michael, age is 39, address is Canada and mood is bad and frustrated.
```
