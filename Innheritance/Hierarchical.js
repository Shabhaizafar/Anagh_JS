// what is Hierarchical Inheritance :

class parent{
    constructor(fname,mname){
        this.FatherName = fname;
        this.MotherName = mname;
        this.All = ()=>{
            console.log(`Fathers Name: ${this.FatherName} \n Mother Name : ${this.MotherName}`);
        }
    }
}

class Boy extends parent{
    constructor(bname,fname,mname) {
        super(fname,mname);
        this.BoyName = bname;
    }
}
class Girl extends parent{
    constructor(gname,fname,mname) {
        super(fname,mname);
        this.GirlName = gname;
    }
}


var b1= new Boy("Raj","Ajay bhai","Geeta");
var g1= new Girl("ABC","Ajay bhai","Geeta");

b1.All();
console.log(b1.BoyName);
g1.All();
console.log(g1.GirlName);
// practice Question list of inheritance in js using Hierarchical inheritance:
/* 1. Create a class for employer and derive two classes from it (Manager and Employee).
Manager should have an additional attribute salary and method getSalary() to print the salary.
Employee should have name and id attributes and methodsgetName() & getId() to print the name & id respectively.
*/
