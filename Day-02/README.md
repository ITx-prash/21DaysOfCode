# Day 2: Execution Context in JavaScript

### What I Learned Today:
An **execution context** is essentially the environment where JavaScript code runs. Here’s a quick summary of what I explored today:

- **Global Execution Context (GEC):** The environment for top-level code. For browsers, the global object is `window`, but in Node.js, it’s `global`.
- **Function Execution Context (FEC):** Created every time a function is invoked, providing its own scope and environment.
- **Call Stack:** A stack-like structure that keeps track of function calls.

 **Phases of Execution Context:**

  **1. Creation Phase:** **Memory allocation** happens. Functions are hoisted, and variables are initialized to `undefined`.  
  **2. Execution Phase:** Code is executed line by line, and variables get assigned their values.
  
 **JIT Compilation & Bytecode:** JavaScript engines like V8 optimize performance by converting code to bytecode and compiling frequently executed code into machine code.

---

Not much learning today due to college assignments, but I’ll explore more about hoisting (differences between `var`, `let`, and `const`) and other concepts soon!

### GitHub Repository:
[21DaysOfCode](https://github.com/ITx-prash/21DaysOfCode)
