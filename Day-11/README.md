# Getter and Setter in JavaScript

Getters and setters are special methods that control how properties in a class are accessed and modified. They enhance encapsulation and allow for validation or processing when interacting with object properties.

## Getter

- Defined using the `get` keyword.
- Allows property values to be accessed with optional processing.
- Accessed like a property, not a method.
- Cannot take parameters.

## Setter

- Defined using the `set` keyword.
- Controls how property values are modified.
- Enables validation or preprocessing before assigning a value.
- Used to restrict or validate user inputs.

### Example 1: Basic Getter and Setter

```javascript
class Person {
  constructor(name, age) {
    this._name = name; // can do unless validation isn't needed
    this.age = age;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name.toUpperCase();
  }
}

const person1 = new Person("John", 30); // Setter and getter invoked
console.log(person1.name); // JOHN
person1.name = "Doe"; // Setter and getter invoked
console.log(person1.name); // DOE
```

---

### _Note:_

#### **Using this._name = name:**

- Directly assigns the value to `_name`, skipping the setter entirely.
- This approach bypasses any logic in the setter but works as long as you don't need additional validation or processing during initialization.

---

### Example 2: Setter for Validation

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(-1000000, "pizza");
console.log(rectangle.width); // -1000000
console.log(rectangle.height); // pizza
console.log();
```

We sure want to restrict the user. Let's update the Rectangle class to use the setter to restrict the user from assigning negative values to the width and height properties of the Rectangle class.

```javascript
class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  set height(newHeight) {
    if (newHeight > 0 && typeof newHeight === "number") {
      this._height = newHeight; //explanation below why use this._height instead of this.height
    } else {
      console.error("Height must be a positive number");
    }
  }

  set width(newWidth) {
    if (newWidth > 0 && typeof newWidth === "number") {
      this._width = newWidth;
    } else {
      console.error("Width must be a positive number");
    }
  }

  get height() {
    return this._height;
  }

  get width() {
    return this._width;
  }
}

const rectangle2 = new Rectangle2("ds", "dsa"); // Setter checks and throws error as below
//Height must be a positive number
// Width must be a positive number
console.log(rectangle2.height); // undefined
console.log(rectangle2.width); // undefined

const rectangle3 = new Rectangle2(2, 5); // Setter passes checks and values get set
console.log(rectangle3.height); // 2
console.log(rectangle3.width); // 5
```

#### Why Use Private Properties (`_width`, `_height`)?

- Private properties (using the underscore `_` prefix) prevent direct access and modification, ensuring encapsulation.
- This approach helps avoid infinite recursion that could occur if the setter tried to assign a value to the same property name.

Example of Infinite Loop:

```javascript
set height(newHeight) {
  if (newHeight > 0) {
    this.height = newHeight; // This causes an infinite loop as it calls the setter recursively and fulls the call stack.
  }
}
```

- To resolve this, the separate private property (`_height` & `_width`) is used to store the actual value.

### Example 3: Setter and Getter with Validation

```javascript
class Person {
  constructor(fName, lName, email) {
    this.fName = fName; // Calls the setter for fName
    this.lName = lName;
    this.email = email;
  }

  set fName(newfName) {
    if (typeof newfName === "string" && newfName.length > 0) {
      this._fName = newfName; // Prevents infinite loop by using _fName
    } else {
      console.error("Invalid Input");
    }
  }

  get fName() {
    return this._fName; // Returns _fName when fName is accessed
  }
}

const person2 = new Person("", "joe", "nick@yahoo.com"); // Throws "Invalid Input"
//   fName property of person2 object is not filled as condition fails in setter, so it doesn't has the fName property
console.log(person2); // Person { lName: 'joe', email: 'nick@yahoo.com' }
console.log(person2.fName); // undefined
```
*But still one can access the `_fName` property, so if we want, we can make it private using '#name' instead.*