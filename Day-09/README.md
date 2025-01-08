# Day 9: Object-Oriented Programming in JavaScript

## Introduction to Object-Oriented Programming (OOP)
Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects and classes. Unlike procedural programming, which structures code into sequences of instructions, or functional programming, which focuses on the use of functions to transform data, OOP models real-world entities by bundling data (properties) and behavior (methods) together.

### Key Principles of OOP
_Will cover remaining soon.._

OOP revolves around four main principles:

1. **Encapsulation**: Bundling data and methods that operate on the data within a single unit or object.
2. **Abstraction**: Hiding the complexity of implementation and exposing only the necessary features.
3. **Inheritance**: Allowing a class to derive properties and methods from another class.
4. **Polymorphism**: The ability to redefine methods for different types or classes.

In JavaScript, OOP has evolved from using prototype-based inheritance with functions to the modern ES6 `class` syntax, providing a cleaner and more intuitive way to write object-oriented code.

---

## Constructor Functions
A **constructor function** is a blueprint for creating objects. Before ES6 introduced `class`, constructor functions were the primary way to implement OOP in JavaScript. By convention, the names of constructor functions start with a capital letter.

### Example: Creating Objects with Constructor Functions
```javascript
function Car(model, year) {
  this.model = model;
  this.year = year;
}

let car1 = new Car("BMW", 2020);
console.log(car1); // Output: Car { model: 'BMW', year: 2020 }
```

### Another Example
```javascript
function User(fName, lName, email) {
  this.fName = fName;
  this.lName = lName;
  this.email = email;
}

let user1 = new User("John", "Doe", "john@hotmail.com");
let user2 = new User("Peter", "Parker", "peter@yahoo.com");
console.log(user1); // Output: User { fName: 'John', lName: 'Doe', email: '
console.log(user2);
```

### Adding Methods to Constructor Functions
We can add methods to the prototype of a constructor function, (although we can also define the method inside the constructor function itself) ensuring that all instances share the same method. This approach is memory efficient.

```javascript
function Animal(species) {
  this.species = species;
}

Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
let cat = new Animal("Cat");
console.log(dog.sound()); // Output: Dog makes a sound
console.log(cat.sound()); // Output: Cat makes a sound
```

> **Note**: The `prototype` property defines the inheritance that instances receive, while `__proto__` is the actual inheritance link on objects.

---

## Classes in JavaScript
JavaScript introduced the `class` syntax in ES6 as syntactic sugar over constructor functions, making it easier to create and manage objects.

### Syntax of a Class
```javascript
class ClassName {
  constructor(properties) {
    // Initialize properties
  }

  method1() {
    // Define method
  }

  method2() {
    // Define method
  }
}
```

### Example: Creating Objects with Classes
```javascript
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  describe() {
    return `${this.model} is the model of ${this.year}`;
  }
}

let car1 = new Car("BMW", 2020);
console.log(car1.describe()); // Output: BMW is the model of 2020
```

### Class Methods
Methods in a class are defined without the `function` keyword. They are automatically added to the class's prototype.

```javascript
class Tea {
  constructor(type) {
    this.type = type;
  }

  describe() {
    return `This is a cup of ${this.type}`;
  }
}

let lemonTea = new Tea("Lemon Tea");
console.log(lemonTea.describe()); // Output: This is a cup of Lemon Tea
```

---

## Inheritance with Classes
Inheritance allows one class to acquire properties and methods from another. In JavaScript, the `extends` keyword is used for inheritance.

### Example: Class Inheritance
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    return `${this.name} makes a sound`;
  }
}

class Monkey extends Animal {
  jump() {
    return `${this.name} jumps`;
  }
}

let monkey = new Monkey("Monu");
console.log(monkey.sound()); // Output: Monu makes a sound
console.log(monkey.jump());  // Output: Monu jumps
```

---
## Notes:
The constructor function inside a **JavaScript class** is used to initialize object **properties** when an instance is created. If property initialization is unnecessary, the constructor can be omitted, and methods can be directly defined inside the class.

### Constructor Function

- Initializes properties of an object instance.
- Automatically called when a new instance is created.

#### Example:

```javascript
class Example {
  constructor(property) {
    this.property = property;
  }
}
```

### Defining Methods

Methods can be defined directly inside the class without requiring a constructor.

#### Example:

```javascript
class Example {
  method() {
    // method logic
  }
}
