// const Arr = [1,2,3,4,4,3,2,1,1];
// console.log('My Array :',Arr);
// console.log(Arr[3]);

// const mySet = new Set(Arr);
// console.log("My Set : ",mySet);
// console.log(mySet[2]);


// // set Unique
// // not access using index
// // order not defined
// // iterable
// // own methods

// for (const iterator of mySet) {
//     console.log(iterator);
// }
const mySet = new Set([3,4,5,7,8]);
console.log("My Set : ",mySet);

mySet.add(1); 
mySet.add(2).add(1);
console.log("My Set : ",mySet);

// mySet.delete(2);
// mySet.delete(3);
// console.log("My Set : ",mySet);

// mySet.clear();
// console.log("My Set : ",mySet);

// console.log(mySet.entries());

// console.log(mySet.keys());
// console.log(mySet.values());
// mySet.forEach(
//     (value)=>{
//         console.log(value);
//     }
// );

// console.log(mySet.size);

console.log(mySet.has(100));