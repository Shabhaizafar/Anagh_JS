const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

// 1st Method 
// const obj2 = {
//     key3 : "value3"
// }


// 2nd Method 
// const obj2 = {};
// obj2.key3 = "value3";
// obj2.key2 = "new";


// 3rd Method
const obj2 = Object.create(obj1);
obj2.key3 = "value3";
obj2.key1 = "new";
console.log(obj1);
console.log(obj2);

// // console.log(obj2.key1);

console.log(obj1[[prototype]]);

// __proto__ === [[prototype]]

// [[prototype]] != prototype

// console.log("Hello1");
// if()
// {
//     console.log("Hello");
// }