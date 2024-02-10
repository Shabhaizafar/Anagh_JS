//create a multiple object using Function
function User(fname,lname,age,email,address){
    var user = Object.create(User.prototype);
    user.fname = fname;
    user.lname = lname;
    user.age = age;
    user.email = email;
    user.address = address;  
    return user;
};
User.prototype = {
    about : function (){
        console.log(`My Name is ${this.fname} ${this.lname}.I am ${this.age} years old.`);
    },
    is18 : function(){
        console.log(this.age>=18);
    },
    Sing : function(){
        console.log('I am Singing.');
    }
};
var user1 = User("Raj","Patel",20,"raj@gmail.com","Gandhinagar");
var user2 = User("ajay","shah",23,"aj@gmail.com","AMD");
var user3 = User("vijay","Patel",10,"vijay@gmail.com","Gandhidham");
console.log(user1);
console.log(user2);
console.log(user3);

user1.about();
user2.about();

console.log(User.prototype);