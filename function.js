// const v1 = 100;
// function All()
// {
//     // console.log(v1);
//     // const v1 = 12;
//     function inner(){
//         console.log('inner', v1);
//     }
//     inner();//100
// }
// All();//12

//default Perameter

// var A1 =  +prompt("Enter the Value of A1 : ");
// var A2 =  +prompt("Enter the Value of A2 : ");
// function Add(n1,n2=0){
//     console.log(n1+n2);
// }
// Add(A1,A2);

// 

//rest Perameter
// function Add(...Arr){
// var sum = 0;
//     for (const value of Arr) {
//         sum+=value;
//     }
//     console.log(sum);
// }
// Add();


// perameter destructuring

// function All(a,b,c,...d){
//     console.log("Value of A :",a);
//     console.log("Value of B :",b);
//     console.log("Value of C :",c);
//     console.log("Value of remain :",d);
// }
// All(1,2,3,4,5,6);