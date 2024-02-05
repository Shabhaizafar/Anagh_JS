//1) foreach
// const Arr = [1,2,3,4,5,6,7,8,9];
// console.log(Arr);

// //no return
// Arr.forEach(
//     (value,index,a)=>{
//      console.log(value,index,a);
//     }
// );
////////////////////////////////
// 2) map
// const Arr = [1,2,3,4,5,6,7,8,9];
//return Arr
// var ans =  Arr.map(
//     (value)=>{
//         if(value>=5)
//         {
//             return value;
//         }
//         else{
//             return 0;
//         }
//     }
// );
// console.log("Map: ",ans);

//////////////////////////////////
// 3) filter 
// const Arr = [1,2,3,4,5,6,7,8,9];
//return Array
// var ans =  Arr.filter(
//     (value)=>{
//         return value>=5;
//     }
// );
// console.log("Filtered Array:",ans);

////////////////////////////////////
// 4) reduce
// const Arr = [1,2,3,4,5];
// //return number //string

// var ans = Arr.reduce(
//     (currentvalue,nextvalue)=>{
//         console.log(currentvalue,nextvalue);
//         return currentvalue+nextvalue;
//     },100
// );
// console.log("Reduce: ",ans);


////////////////////////////////////
// 5) find 
// const Arr = [10,2,3,4,5,6,7,8,9];
// console.log("My Array : ",Arr);
//return number/string   undfined
// var ans = Arr.find(
//     (value)=>{
//         return  value==10;
//     }
// );
// console.log(ans);

//////////////////////////////////////
// 6) every  //true() //false
// const Arr = [1,2,3,4,5,6,7,8,9];
// console.log("My Array : ",Arr);
// var ans = Arr.every(
//     (val)=>{
//         return val>=2;
//     }
// );
// console.log("Every : ",ans);

//////////////////////////////////////
// 7) some 
// const Arr = [1,2,3,4,5,6,7,8,9];
// console.log("My Array : ",Arr);

// var ans =  Arr.some(
//     (val)=>{
//         return val<=10;
//     }
// );
// console.log("Some : ",ans);

///////////////////////////////////
// 8) splice 
// const Arr = [1,2,3,4,5,6,7,8,9];
// console.log("My Array : ",Arr);

// // var ans = Arr.splice(4);
// // console.log("Splice  : ",ans);
//             //starting point , counting of deletation element ,add new elements
// var ans = Arr.splice(1,3,100,101,102,103);
// console.log("Splice  : ",ans);
// console.log("My Array : ",Arr);
//////////////////////////////////////
/*
1. **forEach:**
   - Iterate over an array of numbers and print each number multiplied by 2.
   - Iterate over an array of strings and print each string with an exclamation mark at the end.

2. **map:**
   - Given an array of numbers, create a new array where each number is squared.
   - Given an array of strings, create a new array where each string is capitalized.

3. **filter:**
   - Given an array of numbers, filter out all numbers less than 10.
   - Given an array of strings, filter out all strings containing the letter 'a'.

4. **find:**
   - Given an array of numbers, find the first number greater than 20.
   - Given an array of strings, find the first string that starts with the letter 'A'.

5. **every:**
   - Check if all numbers in an array are even.
   - Check if all strings in an array have more than 3 characters.

6. **some:**
   - Check if there are any negative numbers in an array of numbers.
   - Check if there are any strings longer than 10 characters in an array of strings.

7. **splice:**
   - Remove the last element from an array.
   - Remove elements from index 2 to index 4 from an array.
   - Insert the string "apple" at index 1 of an array.
   - Replace the element at index 3 with the string "banana" in an array.

   
reduce:

Write a function that uses reduce to calculate the sum of all elements in an array.
Use reduce to concatenate all strings in an array into a single string
 */