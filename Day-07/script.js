// 1. To store the full name of each user in the users array in a new array called fullName.
const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    {firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
    ];
    const fullName=users.map((fName)=>`${fName.firstName} ${fName.lastName}`);
    // can also write (i prefer):
    const fullName2=users.map((fName)=>`${fName['firstName']} ${fName['lastName']}`);
    //also as:
    const fullName3=users.map((fName)=>fName.firstName + " " + fName.lastName);

    console.log(fullName);
    console.log(fullName2);
    console.log(fullName3);
    
    