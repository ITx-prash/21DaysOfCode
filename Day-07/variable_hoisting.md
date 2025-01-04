## Difference between `var`, `let`, and `const` in JavaScript

In JavaScript, `var`, `let`, and `const` are used to declare variables, but they have some differences in terms of scope, hoisting, and reassignment.

### `var`

- `var` is function-scoped, meaning it is only available within the function it is declared in.
- It is hoisted to the top of its function scope, so you can access it before it's declared.
- It allows redeclaration and reassignment.
- A `var` variable declared inside a block (e.g., an `if` statement or loop) will also be accessible outside that block, but it will not cross the function scope in which it is defined.

```javascript
function example() {
  console.log(x); // Output: undefined (hoisting)
  var x = 10;     // Declaration and initialization
  if (true) {
    var x = 20;   // Redeclaration and reassignment within the same function scope
  }
  console.log(x); // Output: 20 (affected by redeclaration)
}

example();
``` 

### `let`
- `let` is block-scoped, meaning it is only accessible within the block (e.g., loops, conditionals).
- Unlike `var`, `let` does not allow redeclaration in the same scope.
- Like `var`, `let` is hoisted but not initialized, resulting in a `ReferenceError` if accessed before declaration (temporal dead zone).

```javascript
function example() {
  // Hoisting behavior
  // console.log(x); // ReferenceError: Cannot access 'x' before initialization (temporal dead zone)
  
  let x = 10;      // Declaration and initialization
  if (true) {
    let x = 20;    // Block-scoped, redeclared within a block (not affecting outer x)
    console.log(x); // Output: 20 (x within the block)
  }
  console.log(x);  // Output: 10 (x outside the block is unaffected by the block-scoped x)
}

example();

```
### `const`
- Assigns a constant value to a variable.
- `const` is block-scoped and works similarly to `let` in terms of block scope.
- It must be initialized at the time of declaration and cannot be reassigned.
- Like `let`, `const` is hoisted but not initialized, resulting in a `ReferenceError` if accessed before declaration (temporal dead zone).



### Hoisting in JavaScript
Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before execution, regardless of where they are declared.

### Variable Hoisting with `var`
For `var`, the declaration is hoisted, but the initialization happens later, so accessing it before initialization returns `undefined`.

```javascript
console.log(myVar); // Output: undefined
var myVar = 5;
```

### Hoisting of Block-Scoped Variables (`let` and `const`)
For `let` and `const`, the declarations are also hoisted, but they are in the Temporal Dead Zone (TDZ) until the code execution reaches their definition. Accessing them before initialization throws a `ReferenceError`.

```javascript
console.log(myLet); // ReferenceError
let myLet = 10;
```

### Function Hoisting
The entire function definition is hoisted to the top of the scope. This is why you can call a function before it's defined in your code.

```javascript
sayHello(); // Output: Hello, World!

function sayHello() {
  console.log("Hello, World!");
}
```

### Function Expressions
For function expressions (especially when assigned to variables), only the variable declaration is hoisted, not the function itself.

```javascript
greet(); // Throws TypeError: greet is not a function

var greet = function () {
  console.log("Hi!");
};
```

In this case, the variable `greet` is hoisted, but it’s initialized to `undefined`, so calling it before the assignment results in an error.
