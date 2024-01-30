// class Person{
//     constructor(fname,lname,age){
//         this.firstName = fname;
//         this.lastName = lname;
//         this.Age = age;
//         this.Bio = ()=>{
//             console.log(`My Name is ${this.firstName} ${this.lastName}.`);
//             console.log(`My is ${this.Age}.`);
//         }
//     }
// }
// let person1 = new Person("John","Doe",25);
// person1.Bio();

// class Employee{
//     // constructor(){
//         // this.firstName;
//         // this.lastName;
//     // }
//     get Bio(){
//         console.log(`Employee Name: ${this.firstName} ${this.lastName}`);
//     }
//     set First_Name(v1){
//         this.firstName = v1;
//     }
//     set Last_Name(v1){
//         this.lastName = v1;
//     }
// }
// let emp1 = new Employee();
// emp1.First_Name= "John";
// emp1.Last_Name="Doe";
// emp1.Bio;


class Parent{
    constructor(fn,ln){
        this.firstName = fn;
        this.lastName = ln;
    }
    sayHello(){
        console.log("Hello Everyone !!");
    }
}
class Child extends Parent {
    constructor(fn,ln,cn){
        super(fn,ln);
        this.childName = cn;
    }
    sayHello(){
        console.log("Hello My name is "+this.childName+" and I am the child of "+this.firstName +" "+this.lastName+".");
        console.log(`${this.childName}, Hello Everyone !`);
    }
}

var p1 =  new Parent("John","Doe");
console.log(p1.firstName +" "+ p1.lastName);
p1.sayHello();


var c1 = new  Child("Jane","Smith","abc");
console.log(c1.firstName +" "+ c1.lastName + " "+ c1.childName );
c1.sayHello();



/*
Certainly! Here's a practice question list related to inheritance in JavaScript, focusing on constructor overriding:

1. **Base Class: Vehicle**
    - Create a class `Vehicle` with properties `make` and `model`.
    - Include a constructor that takes `make` and `model` as parameters and initializes the properties.

2. **Subclass: Car**
    - Create a subclass `Car` that inherits from `Vehicle`.
    - Include additional properties like `year` and `color`.
    - Override the constructor to also take `year` and `color` parameters and call the base class constructor.
  
3. **Subclass: ElectricCar**
    - Create another subclass `ElectricCar` that inherits from `Car`.
    - Add a property `batteryCapacity`.
    - Override the constructor to include `batteryCapacity` as a parameter and call the base class constructor.

4. **Main Program**
    - Create an object of type `ElectricCar`.
    - Set its `make`, `model`, `year`, `color`, and `batteryCapacity`.
    - Display the details of the electric car using a method like `displayDetails()`.

Example Output:
```javascript
const myElectricCar = new ElectricCar('Tesla', 'Model 3', 2022, 'Blue', '75 kWh');

myElectricCar.displayDetails();
```

Output:
```
Make: Tesla
Model: Model 3
Year: 2022
Color: Blue
Battery Capacity: 75 kWh
```

Feel free to try solving this practice question, and if you have any questions or need clarification on any part, feel free to ask!
*/ 


/*
Certainly! Here's a practice question list related to inheritance in JavaScript, focusing on the use of getters and setters:

1. **Base Class: Person**
    - Create a class `Person` with properties `firstName` and `lastName`.
    - Use a getter to retrieve the full name (concatenation of first and last names).
    - Use a setter to set both the first and last names.

2. **Subclass: Employee**
    - Create a subclass `Employee` that inherits from `Person`.
    - Add properties `employeeId` and `position`.
    - Use getters to retrieve the full name and employee details (ID and position).
    - Use setters to set the employee details.

3. **Subclass: Student**
    - Create another subclass `Student` that inherits from `Person`.
    - Add properties `studentId` and `grade`.
    - Use getters to retrieve the full name and student details (ID and grade).
    - Use setters to set the student details.

4. **Subclass: Customer**
    - Create a subclass `Customer` that inherits from `Person`.
    - Add properties `customerId` and `loyaltyPoints`.
    - Use getters to retrieve the full name and customer details (ID and loyalty points).
    - Use setters to set the customer details.

5. **Main Program**
    - Create an object of type `Employee`, `Student`, and `Customer`.
    - Set and retrieve details for each type using the getters and setters.
    - Display the output in a readable format.

This practice question emphasizes the use of getters and setters in the context of inheritance. If you have any questions or need clarification on any part, feel free to ask!

*/