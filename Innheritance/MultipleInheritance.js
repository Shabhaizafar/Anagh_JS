// What is Multiple Inheritance in a JS :
// Multiple inheritance refers to the ability of an object to inherit from more than one parent class.
// This concept can be achieved by using JavaScript's prototype chain or constructor stealing technique.
//  Example : 
class Employee{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Company{
    constructor(){
        this.department = "IT";
    }
}

class Developer extends (Employee,Company) {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
        this.Full = ()=>{
            return `${name}, ${age} years old and specializes in ${this.department}`;
        }
    }
}


var obj = new Developer("Raj",12,"Gujarati");
console.log(obj);
console.log(obj.Full());

////////////////////////////////////////
// function Animal(name)
// {
//     this.name = name;
// }
// Animal.prototype.sayName = function() { 
//                                 console.log("My name is " + this.name)
//                             }
// function Mammal(species)
// {
//     this.species = species;
// }
// Mammal.prototype.isMammal =  function() { 
//     console.log(true);
// };

// function Dog(name, breed)
// {
//     Animal.call(this, name);
//     this.breed = breed;
//     // Mammal.call(this,breed);
// }
// Dog.prototype = Object.create(Animal.prototype);
// // Dog.prototype = Object.create(Mammal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function(){console.log('Woof!')};
// var myDog = new Dog("Fido", "Golden Retriever");
// myDog.sayName(); // Output: My name is Fido
// myDog.bark();   // Output: Woof!
// myDog.sayName(); 


// var obj1 = {
//     fname : "zafar"
// }
// var obj3 = {
//     // fname : "raj"
//     lname: "Shah"
// }


// var obj2 = {
//     ...obj1
// }
// console.log(obj2);

// var obj2 = obj1;
// console.log(obj2);

// var obj2 = new Object(obj1);
// console.log(obj2);

// Create Object Using  Create method : 
// var obj2 = Object.create({lname:"Shahwert"});
// console.log(obj2);
// console.log(obj2.fname);

// console.log(obj2.__proto__);


/*
practice Question list of inheritance in js using Multiple inheritance:
1)Create a class Animal with the properties species and color. Provide methods to set and get
species and color, as well as a method called speak that outputs “I am an animal”.
2)Create a subclass Mammal which inherits from Animal and has additional property age. It
should provide methods to set and get age, as well as a method called eat that outputs “I
am eating”.
3)Create another subclass Dog which also inherits from Mammal but overrides the speak method
to output “Woof!” instead of “I am an animal” and provides a method bark that outputs “I am barking”.
4)Create a main program that creates an object of type Dog, sets its species and color,
age, and calls all the provided methods. The output should be something like this:
Dog’s color is black.
Dog’s age is 5.
Dog says Woof!
Dog is eating.
Dog is barking.
*/ 
