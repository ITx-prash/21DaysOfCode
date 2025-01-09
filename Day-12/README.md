## Understanding `addEventListener` and `this` Behavior

### `addEventListener`

`addEventListener` is a higher-order function that takes two arguments: one is the event (e.g., **click**), and the other is the function that executes after the event is triggered.

### `this` in Regular Functions vs Arrow Functions

#### 1. With Regular Functions:
```javascript
document.getElementById("changeTextButton").addEventListener("click", function() {
    console.log(this); // 'this' refers to the button element
});
```
*Here, `this` refers to the element that triggered the event (the button element)*

#### 2. With Arrow Functions:
```javascript
document.getElementById("changeTextButton").addEventListener("click", () => {
    console.log(this); // 'this' refers to the outer scope (likely window)
});
```
*Here, `this` refers to whatever `this` was in the outer scope (usually the global `window` object in the browser)*

### Why This Happens:
- **Regular Functions**: Create their own `this` binding, which in event listeners refers to the element that triggered the event.
- **Arrow Functions**: Do not create their own `this` binding. Instead, they inherit `this` from the enclosing scope.

---

## Difference Between `.innerHTML` and `.textContent`

- `.innerHTML` can execute the provided HTML inside it.
- `.textContent` only outputs plain text and does not parse HTML.

### Example:
```javascript
// Using innerHTML
element.innerHTML = "<strong>Hello</strong>";  // Displays: Hello (in bold)

// Using textContent
element.textContent = "<strong>Hello</strong>"; // Displays: <strong>Hello</strong> (as plain text)
```

*`textContent` is generally faster as it doesn't parse HTML.*