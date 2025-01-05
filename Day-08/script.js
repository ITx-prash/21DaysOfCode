// Define a user object
let user1 = {
    fName: "John",
    lName: "Doe",
    age: 30,
  };
  
  console.log(user1.__proto__ === Object.prototype); // true
  // __proto__ is a reference to the object's prototype object
  // Object.prototype is the top-level object in JavaScript
  // All objects in JavaScript inherit their properties and methods from Object.prototype
  
  // Define an array
  let user2 = ["John", "Doe", 30];
  // Prototype chain for user2 (Array): 
  // user2 (Array) → Array.prototype → Object.prototype → null
  
  console.log(user2.__proto__ === Array.prototype); // true
  console.log(user2.__proto__ === Object.prototype); // false
  // When we check user2.__proto__, we're looking at its immediate parent (Array.prototype),
  // not its grandparent (Object.prototype).
  
  console.log(user2.__proto__.__proto__ === Object.prototype); // true
  // The grandparent of user2 (Array.prototype's __proto__) is Object.prototype
  