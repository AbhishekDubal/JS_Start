/*Intro. 1*/
// console.log('hey javaScript');
// console.log("Abhishek Dubalgunde here");

// window.alert("Are you sure?...");

/*Variables 2 */
// let num;
// num=20;
// let sname='Abhishek D'    //you can take ("")as well. and semicolon is optional
// let check=true;

// console.log(num)    //number
// console.log(check)  //boolean(true/false)
// console.log(sname)  //String


// document.getElementById("p1").innerHTML=sname+' is my name.';
// document.getElementById("p3").innerHTML=check+" okay then number is "+num
// document.getElementById("p2").innerHTML="And number is "+num;

/*Operator3 */
// let number=10;

// let number1=number+2;
// let number2=number-1;
// let number3=number*2;
// let number4=number/2;
// let number5=number%2;

// console.log(number);
// console.log(number1);
// console.log(number3+" is number 3")
// console.log('number 4 result is: '+number4);
// console.log(number5)

// let marks=32
// marks+=10;
// console.log(marks)

// document.getElementById("p3").innerHTML=number4

/*4.Taking input from User by TWO-ways*/
//1.Simple way
/*
let username=window.prompt('What is your name:');
console.log(username)
*/

//2.Another way(little advance)
/*
let job;
document.getElementById('button_id').onclick=function(){
    job=document.getElementById('text_id').value
    console.log(job);
    // document.getElementById('label_id').innerHTML="Enter the here Designation:"
}
*/

//Type-Casting:- changing one datatype to another(String, Number, Boolean)
let age=window.prompt("What is your age?");//suppose age=25
age+=1;     //25+1
console.log(age)    //251 (Because age is string here,it'll concat)
console.log(typeof age) //string
age=Number(age)
console.log(typeof age) //number (Type-casted)

let mynum=12.3
console.log(mynum+' '+typeof mynum)
// or
console.log(mynum ,typeof mynum )
mynum=String(mynum)
console.log(mynum, typeof mynum)

let myname='';
console.log(myname,typeof myname)   //string
myname=Boolean(myname)
console.log(typeof myname, myname)  ///boolean false
