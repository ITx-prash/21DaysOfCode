/*Why it's actually called primitive datatype?
Primitive actually means immutable data types i.e.the value they hold cannot 
be changed,without making a new memory address i.e. not possible to change in the 
original memory address.
Unlike, non-primitive/reference datatype which can be altered;
****/
//C is going on in college just learning js while comparing it with c

/*In C, arrays are fixed-size, contiguous blocks of memory where each element must be of the same data type. This is because C needs to know exactly how many bytes to allocate for each element and how to interpret 
the bits at each position.
For example, in C:
int numbers[4] = {1, 2, 3, 4}; // Each element takes exactly 4 bytes (typically)
JavaScript, however, handles arrays very differently:
1. Arrays are Objects: In JS, arrays are actually objects where the indices are properties (keys) and the values can be of any type. a key value pair where index points to the 
memory address.
Memory Management: Instead of storing values directly in a contiguous block, JavaScript arrays store references (pointers) to values. Each array element is essentially a pointer that can point to any type of data stored elsewhere in memory.
*/
let myArray1 = ["Marvel", "DC", 1, 2, true];
console.log(myArray1);
//can add element using push method:push adds and return new array length
let pushed = myArray1.push("Praz");
console.log(myArray1);
console.log(pushed);

//can use pop method to remove the last element:pop(remove) last element and return poped element
let popped = myArray1.pop();
console.log(myArray1);
console.log(popped);

/***Data Type Copying Behavior:**
- Primitive types: Create ***independent copies*** (deep copy)
  let a = 5;
  let b = a; // b gets its own copy of 5 independent of 'a'
  
- Reference types: Copy references to original data (shallow copy)

  let countryList1=["Nepal","India","USA","Canada"];
let countryList2=countryList1;// countryList2 points to same array as countryList1 so altering arr2 will also alter arr1
countryList2.pop();
console.log(countryList1);
console.log(countryList2);
  **Reference data type copying in detail:**
*/

const originalArray = ["ram", "hari", "gita"];
const copiedArray = [...originalArray]; //this one is spread operator
copiedArray.pop();
console.log(originalArray); //[ 'ram', 'hari', 'gita' ]
console.log(copiedArray); //[ 'ram', 'hari' ]
/*
In above, it seems like it has made a deep copy,
but actually, that's not a deep copy - that's still a shallow copy for 
primitive values like strings. The spread operator works perfectly for creating 
a new array with primitive values, which might make it seem like a deep copy.

The key distinction becomes clear when we have nested arrays or objects:*/

const nestedNums = [2, 3, 4, [5, 6]];
const nestedNumsCopy = [...nestedNums];
console.log(nestedNums); //[ 2, 3, 4, [ 5, 6 ] ]
nestedNumsCopy[3][0] = "Prash"; //to access the first element inside the 3rd index
console.log(nestedNums); //[ 2, 3, 4, [ 'Prashant', 6 ] ]
/*
--> For primitive values like strings, numbers, and booleans, the spread operator 
creates what appears to be a completely independent copy. But for nested objects 
or arrays, it still maintains references to the original nested structures.*/
// ************************
// Some array methods
//1.concat():to merge 2 arrays
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combinedNumbers = numbers1.concat(numbers2);
console.log(combinedNumbers);
//2.length:to calc array length:is a property not method
let len = combinedNumbers.length;
console.log(len);
//3.shift():removes 1st array element
let namesList = ["Pras", "Praz", "Joe"];
namesList.shift();
console.log(namesList);
//4.unshift(): puts provided values in 1st
namesList.unshift("Don", "Mike");
console.log(namesList);
//will learn more about map,filter,reduce etc. later

//for_loop-que:
let citiesList = ["Paris", "New York", "Tokyo", "London"];
let citiesOutput = [];
for (let i = 0; i < citiesList.length; i++) {
  console.log(citiesList[i]);
  citiesOutput.push(citiesList[i]);
}
console.log(citiesOutput);
