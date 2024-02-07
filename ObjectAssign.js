// // ObjectAssign
// //-----------------------------------------------------------------------------//
// var obj1 = {A : 0,B : {C : 0},D:100};
// var obj2 = {A : 0,B : {C : 0}};
// var obj4 = {A : 0,B : {C : 0}};
//                 // target ,....sources  
// var obj3 = Object.assign({},obj1,obj2,obj4);

// console.log("Object 1 : ",obj1);
// console.log("Object 2 : ",obj2);
// console.log("Object 3 : ",obj3);

// console.log("After :");
// console.log("Changing 1:");
// obj1.A = 1;

// console.log("Object 1 : ",obj1);
// console.log("Object 2 : ",obj2);
// console.log("Object 3 : ",obj3);

// console.log("Changing 3:");
// obj2.A = 2;
// obj2.B.C = 3;
// console.log("Object 1 : ",obj1);
// console.log("Object 2 : ",obj2);
// console.log("Object 3 : ",obj3);
// console.log("Object 4 : ",obj4);
// console.log("Changing 4:");

// obj1.B.C = 5;
// console.log("Object 1 : ",obj1);
// console.log("Object 2 : ",obj2);
// console.log("Object 3 : ",obj3);
// console.log("Object 4 : ",obj4);
// console.log("Changing 5:");


// obj4.B.C = 1000;
// console.log("Object 1 : ",obj1);
// console.log("Object 2 : ",obj2);
// console.log("Object 3 : ",obj3);
// console.log("Object 4 : ",obj4);

////////////////////////////////////////////
/*
Optional Chaining:

Write a function that accesses nested properties of an object using optional chaining and returns the value if it exists, otherwise returns a default value.
Modify an existing code snippet to use optional chaining to safely access a deeply nested property.
Object.assign():
// //////////////////////////////////////////

Write a function that takes multiple objects as arguments and merges them into a single object using Object.assign().
Use Object.assign() to clone an object and modify specific properties in the cloned object.
Combining Optional Chaining and Object.assign():

Create a function that takes two objects as parameters, checks if a property exists in the first object, and if it does, merges it into the second object using Object.assign().
Write a function that clones an object deeply, ensuring all nested properties are also cloned, and utilize optional chaining to handle cases where certain nested properties may not exist.
//////////////////////////////////////////////////////////
Advanced Practice:

Implement a function that performs a deep comparison between two objects, considering all nested properties, and returns true if they are structurally equivalent, false otherwise. Utilize optional chaining and recursion for this task.
Write a function that takes an array of objects, each representing a person with properties like name, age, and address. Use optional chaining and Object.assign() to filter out people who have a specified age and merge their details into a new object.

///////////////////////////////////////
Practical Application:

Develop a user profile management system where you can update user details. Use optional chaining to handle cases where certain user attributes may not exist.
Create a function that accepts an array of objects, each representing a product with properties like name, price, and category. Use Object.assign() to update the price of products based on their category, with an optional chaining check to ensure the category property exists.
 */