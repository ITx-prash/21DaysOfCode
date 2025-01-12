## Async in JavaScript

`async` and `await` are used to handle promises in a more comfortable fashion. 

- `async` is used to declare that a function will return a promise. 
- `await` is used to tell the JS runtime to wait for the promise to resolve before continuing with the code. 

### Key Points:
- The `await` keyword can only be used inside an `async` function.
- An `async` function will always return a promise.
  - If the function returns a value, the promise will be resolved with the returned value.
  - If the function throws an exception, the promise will be rejected with the thrown value.


### Basic `async` 

```javascript
async function greet() {
  return "Hello World!";
}

greet().then((data) => {
  // console.log(data); // Hello World!
});
```

### Using `async` and `await` Together

```javascript
function getBlog() {
  return new Promise((resolve, reject) => {
    let val = false;
    setTimeout(() => {
      if (val) {
        resolve("Blog data fetched");
      } else {
        reject("Unable to fetch data");
      }
    }, 2000);
  });
}

async function getData() {
  try {
    console.log("Fetching Data...");
    const data = await getBlog();
    console.log(data);
  } catch (error) {
    console.log("Error:", error); // Error: Unable to fetch data
  }
}
getData();
```
