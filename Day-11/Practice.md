## Prototypes in JavaScript

### Question 1: Prototype Chaining

#### Task 1: Create a Prototype Chain
- **Objective:**
  - Build a constructor function `Animal` with a method `speak()` returning `'Animal speaking'`.
  - Make another constructor function `Dog` inherit from `Animal` using prototypes.
  - Add a `bark()` method to `Dog` that returns `'Woof!'`.
  - Show how the prototype chain works.

```javascript
// Constructor function Animal
function Animal() {}
Animal.prototype.speak = function () {
  return "Animal speaking";
};

// Constructor function Dog
function Dog() {}
// Establish prototype chain
Dog.prototype = Object.create(Animal.prototype);
// Add Dog-specific methods
Dog.prototype.bark = function () {
  return "Woof!";
};

// Creating instances of Dog
const dog = new Dog();
console.log(dog.speak()); // Animal speaking (inherited from Animal)
console.log(dog.bark()); // Woof! (from Dog)
```

## Class-Based Inheritance

### Question 2: Class Inheritance

#### Task 1: Create a Class Hierarchy
- **Objective:**
  - Define a `Vehicle` class with properties `make` and `model`.
  - Add a `getDetails()` method returning `"Make: [make], Model: [model]"`.
  - Create a subclass `Car` that extends `Vehicle`.
  - Add a `startEngine()` method to `Car` returning `'Engine started'`.

#### Task 2: Method Overriding
- Expand the `Vehicle` class with a `move()` method that returns `'The vehicle is moving'`.
- Override `move()` in the `Car` class to return `'The car is driving'`.

#### Task 3: Static Methods
- Add a static method `isVehicle(obj)` to the `Vehicle` class to check if an object is an instance of `Vehicle` or its subclasses.

```javascript
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
    return "The vehicle is moving";
  }
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

class Car extends Vehicle {
  startEngine() {
    return "Engine started";
  }
  move() {
    return "The car is driving";
  }
}

const car = new Car("BMW", 2020);
const vehicle = new Vehicle("Toyota", 2019);
console.log(car.move()); // The car is driving
console.log(vehicle.move()); // The vehicle is moving
console.log(Vehicle.isVehicle(vehicle)); // true
```

## Encapsulation, Polymorphism, and Abstraction

### Question 3

#### Task 1: Encapsulation Using Getters and Setters
- **Objective:**
  - Create a `BankAccount` class with a private `_balance` property.
  - Include `deposit(amount)` and `withdraw(amount)` methods.
  - Use getters and setters to manage `_balance`, ensuring it never goes negative.

#### Task 2: Polymorphism with Method Overriding
- **Objective:**
  - Define a base `Shape` class with an `area()` method that defaults to returning `0`.
  - Create `Circle` and `Rectangle` subclasses that override `area()` to calculate their respective areas.

```javascript
// Task 1: Encapsulation Using Getters and Setters
class BankAccount {
  constructor(initialBalance = 0) {
    this._balance = initialBalance;
  }
  get balance() {
    return this._balance;
  }
  set balance(newBalance) {
    if (newBalance < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = newBalance;
  }
  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this._balance += amount;
    return this._balance;
  }
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be positive");
    }
    if (this._balance - amount < 0) {
      throw new Error("Insufficient funds");
    }
    this._balance -= amount;
    return this._balance;
  }
}

// Task 2: Polymorphism with Method Overriding
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

// Example Usage
const account = new BankAccount(1000);
account.deposit(500); // Balance: 1500
account.withdraw(200); // Balance: 1300
console.log(account.balance); // 1300

const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(shape.area()); // 0
console.log(circle.area()); // ~78.54
console.log(rectangle.area()); // 24
```
