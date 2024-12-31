//ways to print
const name1 = "Pras";
console.log("Hello," + " " + name1 + "!");

let greet2 = `Hello, ${name1}!`; //better

console.log(`Hello, ${name1}!`);
console.log(greet); //same o/p as above

console.log(`sum: ${1 + 2}`);
//About objects:
const name2 = "Pras";
greet2 = `Hello, ${name1}!`;
console.log(`Hello, ${name1}!`);
console.log(greet);

console.log(`sum: ${1 + 2}`);

//Objects include key-value pair known as attribute or properties
let user = {
  name: "Pras",
  address: "Ghar",
  interest: "Tech",
  "with space": "how to print this",
};
//accessing 1st way:
console.log(user.address);
user.addressPermanent = "Old Ghar"; //can add or remove attribute
console.log(user.addressPermanent);
//2nd way when there's key with space or not:
console.log(user["with space"]);
console.log(user["name"]);
