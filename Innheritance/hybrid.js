// Hybrid Inheritance : 

class Vehicle{
    constructor(cname,color,price){
        this.companyName = cname;
        this.Color = color;
        this.Price= price;
    }
}

class Bike  extends Vehicle {
    constructor(cname,color,price,fuel,wheel){
        super (cname,color,price);
        this.FuelType = fuel;
        this.wheelSize = wheel;
    }
}

// var  mybike = new Bike("Honda","Red",10000,"Petrol",220000);
// console.log(mybike.companyName +" is a "+mybike.Color+" bike priced at Rs."+mybike.Price+" with "+mybike.FuelType+" as the fuel and has wheels of size "+mybike.wheelSize);

class  Car extends (Bike,Vehicle) {
    
}
var mycar = new Car ("Toyota","Blue",50000);
console.log(mycar.companyName + " is a " + mycar.Color + " car which costs Rs."+mycar.Price);
console.log(mycar);
// practice Question list of inheritance in js using Hybrid inheritance:
/*
1. Create a class called 'Employee' with attributes like name , id and salary .
Create another class called 'Manager' that inherits from Employee and add an attribute department.
Make sure Manager also has all the properties of Employee.
2. A company has employees who work on different shifts i.e., morning, afternoon or night shift.
Create a class for Company and inside it create another class for Shift with attributes like startTime and endTime.
3. Create a class for Employees working on Morning Shift with attributes like Name, Id, Salary, Shift.
   Similarly create classes for Afternoon and Night Shift Employees having same attributes as above but belonging to Afternoon and Night Shift respectively.
4. Create a method in Employee class that returns full details of employee including his/her name,id,salary etc.
   This should inherit from both Employee and Shift so it will have all the attributes of Employee as well as Shift.
4. Now create objects representing each type of employee and print their details.
*/
