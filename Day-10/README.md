# Encapsulation:

Encapsulation is one of the fundamental principles of OOP which refers to the bundling of data with the methods that operate on that data. Encapsulation is used to hide the values or state of a structured data object inside a class, preventing unauthorized parties' direct access to them.

```javascript
class Account {
  #balance = 0; // # symbol is used to declare a private variable accessible only within the class where they are declared
  getBalance() {
    return `Current Balance $ ${this.#balance}`;
  }

  deposit(amount) {
    this.#balance += amount;
    return `Successfuly Deposited $ ${amount}`;
  }
}
const user1 = new Account();
console.log(user1.balance); //undefined :>cannot access balance directly as balance is private and can only be accessed through the methods of the class

console.log(user1.getBalance()); //Current Balance $ 0
console.log(user1.deposit(150)); //Successfully Deposited $ 150
console.log(user1.getBalance()); //Current Balance $ 150
```

# Data Abstraction:

Data abstraction is the process of hiding the implementation details and showing only the functionality to the user. In other words, it deals with the outside view of an object (interface) rather than its internal implementation. In JavaScript, data abstraction can be achieved using classes and methods.

```javascript
class makeCoffee {
  start() {
    // some complex code here
    return `starting the coffee machine`;
  }
  brewCoffee() {
    // some complex code here
    return `brewing coffee`;
  }
  //can also combine the above two methods into one so that we can call it in one go and hide the complexity
  pressStart() {
    // return this.start() + " " + this.brewCoffee();
    return `${this.start()} and ${this.brewCoffee()}`;
  }
}

// Move these lines outside the class
const myCoffee = new makeCoffee();
console.log(myCoffee.start()); // starting the coffee machine
console.log(myCoffee.brewCoffee()); // brewing coffee

console.log(myCoffee.pressStart()); // starting the coffee machine and brewing coffee
```

# Polymorphism:

`Polymorphism` allows objects of different classes to be treated as objects of a common superclass. It allows methods to do different things based on the object that calls them. It is the practice of designing objects to share behaviors and to be able to **override** shared behaviors with specific ones. Polymorphism takes advantage of **inheritance** in order to make this happen.

```javascript
class Bird {
  fly() {
    return "I can fly.";
  }
}

class Penguin extends Bird {
  fly() {
    return "I cannot fly";
  }
}
const sparrow = new Bird();
const penguin = new Penguin();
console.log(sparrow.fly()); // I can fly.
console.log(penguin.fly()); // I cannot fly
```

This example verifies the concept of polymorphism in JavaScript by showing that the `fly` method behaves differently depending on whether it is called on an instance of `Bird` or `Penguin`.

# Static Method:

A `static` method is a method that belongs to the **class** itself, not to the instances of the class. It is called on the class itself, rather than on an instance of the class. Static methods are often used to create utility functions for an application.

```javascript
class Calulator {
  static add(a, b) { // static method: can be called without creating an instance of the class and is called on the class itself
    return a + b;
  }
} 
const miniCalc = new Calulator();
// console.log(miniCalc.add(2, 3)); // Error: miniCalc.add is not a function
console.log(Calulator.add(2, 3)); // 5 
//  The static method add() can be called on the class itself without creating an instance of the class. 
```

*Also got basic understanding of getter and setter methods in JavaScript. Will explore more soon.*
