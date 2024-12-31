# Day 3: JavaScript Data Types and Loops
I have already gone through these some time ago, just revisiting and 
exploring the key topics; 
## **JavaScript Data Types**

### **1. Primitive Data Types**
- **Number**: Numeric values (integers and decimals).
  - For larger values, use `BigInt` by adding `n` at the end of the number, e.g., `12345678901234567890n`.
- **String**: Text enclosed in quotes.
- **Boolean**: `true` or `false`.
- **Undefined**: A variable that has been declared but not assigned a value.
- **Null**: Represents the intentional absence of a value.
- **Symbol**: Unique identifier.

### **2. Non-Primitive (Reference) Data Types**
- **Array**: Ordered collection of values, e.g., `[1, 2, 3]`.
- **Object**: Collection of key-value pairs, e.g., `{ name: "Pras" }`.
- **Function**: Reusable block of code.

---

### Note:
JavaScript is a **dynamically typed language**, meaning variables can hold any data type without explicit declaration. This contrasts with languages like C, where types must be defined before assigning values.

---

### Strings and Quotes
Double (`"`) and single (`'`) quotes are simple and function the same in JavaScript. Backticks (`` ` ``), however, provide **extended functionality**, such as embedding expressions using `${...}`.

```javascript
const name1 = "Pras";
let greet = `Hello, ${name1}!`;

console.log(`Hello, ${name1}!`); // Output: Hello, Pras!
console.log(greet); // Output: Hello, Pras!

console.log(`sum: ${1 + 2}`); // Output: sum: 3
```

Expressions inside `${...}` are evaluated, and the result becomes part of the string. This feature is exclusive to backticks.

---

### About Objects
Objects are collections of key-value pairs, known as attributes or properties.

```javascript
let user = {
    name: "Pras",
    address: "Ghar",
    interest: "Tech",
    "with space": "how to print this"
};

// Accessing properties
console.log(user.address); // Output: Ghar

// Adding or modifying properties
user.addressPermanent = "Old Ghar";
console.log(user.addressPermanent); // Output: Old Ghar

// Accessing properties with special characters
console.log(user["with space"]); // Output: how to print this
console.log(user["name"]); // Output: Pras
```

---

### Conditionals
Nothing much in it, gone through it.

---

## **Loops in JavaScript**

### **1. For Loop**
When you know how many times to run the loop:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
}
// Output: Iteration: 0 to Iteration: 4
```

### **2. While Loop**
For when the condition decides the loop:

```javascript
let count = 0;
while (count < 3) {
    console.log(`Count: ${count}`);
    count++;
}
// Output: Count: 0 to Count: 2
```

### **3. Do-While Loop**
Runs at least once, even if the condition is false:

```javascript
let num = 5;
do {
    console.log(`Number is: ${num}`);
    num--;
} while (num > 2);
// Output: Number is: 5 to Number is: 3
```
*Will sum-up for...in and for...of with arrays and objects later.*