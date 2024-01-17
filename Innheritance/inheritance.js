// var obj1 = {
//     fname: "zafar"
// }
// console.log("Object Literal :",obj1);
// // in-built Constructor 
// var obj2 = new Object({fname:"Raj"});
// console.log("Object using inbuilt Constructor :",obj2);

// // ---------------------- 
// function Person(fname){
//     this.fname = fname;
// }

// var obj3 = new Person("Ajay");
// console.log("Using Custom Constructor Function : ",obj3)
// // --------------------------
// class Employee{
//     constructor(fname){
//         this.fname = fname;
//     }   
// }
// var obj4 = new Employee("ABC");

// console.log("Using Custom Constructor using class : ",obj4)
// ////////////////////////////////////////////////////////////////////////////
// What is Inheritance in a JS : 
// When we create an object from another object, it becomes known as inheritance.
// Example
class Parent{
    constructor(fname){
        this.fname=fname;
        //age 
        //salary
    }
}
// child class
// class Child extends Parent{
//      constructor(p,Age){
//             var z = p;
//             super(z);
//             this.Age = Age;
//     }
// }

// var Child1 = new Child(12,"Zafar");
// console.log(Child1);
///////////////////////////////////////////////////////////////
// practice Question list of inheritance in js using single inheritance:
/*
 practice Question list of inheritance in js using single inheritance:
 Write a JavaScript program to demonstrate the concept of Single Inheritance (also called as one level inheritance)
    Q1: Create a class for employee and assign name ,age and salary to the employee .
    Q2: Create a derived class which inherits all properties & methods from employee class and add
    department property to the derived class.
*/


