// what is Multilevel Inheritance :

class GrandFather{
    constructor(gname){
        this.grandFatherName = gname;
        this.Data1 = ()=>{
            console.log(`I am your GrandFather and My Name is ${this.grandFatherName}.`);
        }
    }
}

class Father extends GrandFather{
    constructor(fname,gname){
        super(gname);
        this.fatherName= fname;
        this.Data2 = ()=>{
            console.log(`I am your Father and My Name is ${this.fatherName}.`);
        }
    }
}

class Child extends Father{
    constructor(cname,fname,gname){
        super(fname,gname);
        this.childName = cname;
        this.Data3 = ()=>{
            console.log(`My Name is ${this.childName}.${this.fatherName},${this.grandFatherName}`);
        }
    }
}

const obj1  = new Child("Raj","Ajay Bhai","Vijay Bhai");
obj1.Data1();
obj1.Data2();
obj1.Data3();