# Understanding Asynchronous Behavior in JavaScript

## Callbacks
A callback is a function passed as an argument to another function.

---
JavaScript is a synchronous, single-threaded programming language that executes one task at a time in the main thread. Despite this, its event loop enables efficient handling of multiple tasks by offloading certain operations, allowing for non-blocking behavior. Here's how it works in detail:

## Synchronous Behavior
When JavaScript executes code, it does so in a synchronous and blocking manner by default. This means tasks are added to the **call stack** and executed one by one in the order they appear. This sequential execution ensures that each task completes before the next one begins, making the flow predictable and easy to understand.

For example:

```javascript
console.log("Start");
console.log("Middle");
console.log("End");
```

### Output:
```
Start
Middle
End
```

In this case, all the operations are synchronous, and they execute in sequence.

---

## Asynchronous Behavior
However, certain operations like network requests, timers, or accessing location APIs require more time. These operations are offloaded to the **browser environment** or the runtime environment (Node.js, Deno, Bun) to prevent blocking the main thread. Once offloaded, JavaScript continues executing other tasks in the **call stack**.

For example:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout callback");
}, 1000);

console.log("End");
```

### Output:
```
Start
End
Timeout callback
```

### Explanation:
1. The `setTimeout` function is recognized as an asynchronous task.
2. JavaScript sends the task to the browser's timer API and continues executing other tasks in the call stack.
3. Once the timer is done (1 second in this case), the callback is added to the **callback queue**.
4. The **event loop** ensures the callback queue tasks are added to the call stack **only when the call stack is empty**.

---

## Key Components

### Call Stack
The call stack is where JavaScript keeps track of function calls. Functions are pushed onto the stack when called and popped off once they finish executing.

### Browser/Runtime APIs
Operations like `setTimeout`, `fetch`, and others are sent to the browser or runtime environment. These are handled outside the JavaScript engine.

### Callback Queue
When an asynchronous operation completes, its associated callback is added to the **callback queue**.

### Event Loop
The event loop constantly checks the call stack and the callback queue. If the call stack is empty, it pushes tasks from the callback queue onto the call stack.

---

## Practical Example
Let’s see a more complex example to illustrate these concepts:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 2000);

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data:", data);
    });

setTimeout(() => {
    console.log("Timeout 2");
}, 1000);

console.log("End");
```

### Output:
```
Start
End
Timeout 2
Fetched Data: { ...post data... }
Timeout 1
```

### Step-by-Step Execution:
1. **Synchronous Execution:**
   - `console.log("Start")` is executed and logged.
   - The `setTimeout` for 2 seconds is registered and sent to the timer API.
   - The `fetch` call is sent to the network API.
   - The `setTimeout` for 1 second is registered and sent to the timer API.
   - `console.log("End")` is executed and logged.

2. **Asynchronous Handling:**
   - After 1 second, the `Timeout 2` callback is added to the callback queue.
   - The network request completes, and its callback is added to the callback queue.
   - After 2 seconds, the `Timeout 1` callback is added to the callback queue.

3. **Event Loop:**
   - Once the call stack is empty, the event loop moves `Timeout 2` to the call stack and executes it.
   - Next, the network callback for `fetch` is executed.
   - Finally, the `Timeout 1` callback is executed.

---

## A Common Question: What Happens If the Call Stack is Busy?

If the call stack is executing a long-running task (e.g., a large computation), and a timer's duration expires, the callback is **not executed immediately**. Instead, it waits in the callback queue until the call stack clears.

### Example:
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer 1: One second passed");
}, 1000);

const start = Date.now();
while (Date.now() - start < 3000) {
    // Simulating a long-running task (3 seconds)
}

console.log("End");
```

### Output:
```
Start
End
Timer 1: One second passed
```

### Explanation:
1. `console.log("Start")` executes immediately.
2. The `setTimeout` callback is scheduled for one second in the timer API.
3. The long `while` loop blocks the call stack for three seconds.
4. Even though the `setTimeout` callback is ready after one second, it cannot be moved to the call stack because the stack is busy.
5. Once the `while` loop finishes (after 3 seconds), the stack clears, and the event loop moves the timer's callback to the stack.
6. Finally, `console.log("Timer 1: One second passed")` executes.

---

## Summary
- JavaScript executes synchronously in the **call stack**.
- Asynchronous tasks are handled by **browser/runtime APIs**.
- **Callback queue** and **event loop** manage deferred execution of asynchronous tasks.
- Callbacks in the queue **wait for the call stack to clear** before execution, even if their timers have expired.

This mechanism ensures JavaScript remains non-blocking (i.e., doesn't stop the execution in the call stack) while handling time-intensive tasks efficiently.

