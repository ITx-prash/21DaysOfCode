# JavaScript Array Methods

### 1. `map()`

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array. `map()` does not change the original array.

### Example

This is a simple example of how to use the `map` function in JavaScript. The code below doubles each element in an array. We use `map` instead of `forEach` because `forEach` doesn't return anything.

```javascript
const arr = [1, 2, 3, 4, 5];

const double0 = arr.forEach((value) => value * 2); // This will return undefined
// forEach doesn't return anything (returns undefined), it just executes the callback for each element. That's why double0 will be undefined here.

const double = arr.map((value) => value * 2); // This will return [2, 4, 6, 8, 10]
// Map creates and returns a new array with the transformed values, which is what we want for doubling each element.

console.log(double0); // undefined
console.log(double); // [2, 4, 6, 8, 10]
```

---

### 2. `reduce()`

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It is used to reduce the array to a single value like adding all the elements of an array.

### Syntax

```javascript
reduce(callbackFn)
reduce(callbackFn, initialValue)
```

### Example 1: Sum of Array Elements

This example demonstrates how `reduce` helps in summing all the elements of an array.

#### Using a `For() Loop`:

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum); // Output: 55
```

#### Using `reduce`:

```javascript
const sum1 = nums.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(sum1); // Output: 55
```

---

### Example 2: Maximum Value in an Array

This example shows how to find the maximum value in an array.

#### Using a `For() Loop`:

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findMax(nums) {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
    }
    return max;
}
console.log(findMax(nums)); // Output: 10
```

#### Using `reduce`:

```javascript
const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = nums1.reduce((max, curr) => {
    if (max < curr) {
        max = curr;
    }
    return max;
}, 0);
console.log(output); // Output: 10
```


---
