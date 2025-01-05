// 1. To store the full name of each user in the users array in a new array called fullName.
const users1 = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];
const fullName = users1.map((fName) => `${fName.firstName} ${fName.lastName}`);
// can also write (i prefer):
const fullName2 = users1.map(
  (fName) => `${fName["firstName"]} ${fName["lastName"]}`
);
//also as:
const fullName3 = users1.map((fName) => fName.firstName + " " + fName.lastName);

// console.log(fullName);
// console.log(fullName2);
// console.log(fullName3);

// 2. To return an array like this:> age : noOfUsers:
// acc: { 26: 2, 75: 1, 50: 1 }
const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];
const output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);
//3. to store the first name of people whose age>30 in a new array.
const people = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 },
];

let filteredArray = people
  .filter((indie) => indie["age"] > 30)
  .map((data) => data.firstName);
console.log(filteredArray);

//OR
let filteredArray2 = people.reduce((acc, curr) => {
  if (curr.age > 30) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log(filteredArray2);
