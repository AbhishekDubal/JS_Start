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

//5.Type-Casting:- changing one datatype to another(String, Number, Boolean)
/*
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
*/

//6.const:= it's like a final keyword in java. 
/*
const PI=3.14;
let radius=window.prompt('Enter the radius here...');
radius=Number(radius)
console.log(radius);
let circumference=2*PI*radius;
console.log(circumference+' is circumference')
*/

//7.Math class
/*
let num=10.6;
num=Math.round(num);
console.log(num)    //11 (it'll round-off the given value to NEARest value)

let x=12.8;
x=Math.floor(x)
console.log(x)  //12  (it'll round-off to LOWest value)

let y=20.1;
y=Math.ceil(y)
console.log(y)  //21 (it'll always round-off to GREATer value)

let z=25;
z=Math.sqrt(z)
console.log(z)  //5

z=Math.pow(z,2)
console.log(z)  //25

let a=2.5;
a=Math.abs(a)
console.log(a)  //2.5 (it'll tell you how far this number is from ZERO)

let max_value=Math.max(x,y,z)
console.log(max_value," is maximum value");
let min_value=Math.min(x,y,z)
console.log(min_value+ " is minimum")
  
let b=Math.min(14,335,553,5)
console.log(b)

let c=Math.PI
console.log(c)  //3.14 (PI -is constant pre-deifined value)
*/

//8. Rectangle-Tri-angle value, by taking user input.
//formula(c=sqrt(a*a+b*b))
/*
let side1=4;
let side2=3;
let side3=Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2))
console.log(side3)

//Now by user input:
document.getElementById('submit_id').onclick=function(){
    side1=document.getElementById('text1_id').value;
    side1=Number(side1)
    console.log(side1,typeof side1);

    side2=document.getElementById('text2_id').value
    side2=Number(side2)
    console.log(side2);

    side3=Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2))
    console.log(side3);

    document.getElementById('text3_id').innerHTML='Side 3: ' +side3
}

//Another easy way:
let a=window.prompt("Enter a= ");
a=Number(a)
console.log(a,typeof a)
let b=window.prompt('Enter b=');
b=Number(b)
console.log(b,typeof b)

let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
console.log(c,' is the 3rd angle.')
*/

//9.Counter Program
/*
let count=0;
document.getElementById('increase_id').onclick=function(){
    count+=1;
    document.getElementById('label_id').innerHTML=count;
}
document.getElementById('decrease_id').onclick=function(){
    count-=1;
    document.getElementById('label_id').innerHTML=count;
}
document.getElementById('reset_id').onclick=function(){
    count=0
    document.getElementById('label_id').innerHTML=count
}
*/

//10.Dice game program
/*
let person1;
let person2;

document.getElementById('roll_id').onclick=function(){
person1=Math.floor(Math.random() * 6) +1;
person2=Math.floor(Math.random()*6)+1;

document.getElementById('person1_id').innerHTML=person1;
document.getElementById("person2_id").innerHTML=person2 //displaying on webpage

console.log('person1 got '+person1)
console.log('person2 got '+person2)//These two for keeping records
}
*/

//11.String pre-definded methods:
/*
let StudentName="Abhishek";
let phoneNumber="+91-9073462864"

console.log(StudentName.length)
let lengthInName=StudentName.length
console.log(lengthInName)

console.log(StudentName.charAt(2))
console.log(StudentName.indexOf('h'))
console.log(StudentName.lastIndexOf('h'))
console.log(StudentName.toLowerCase())
console.log(StudentName.charCodeAt(1))  //ASCI value
console.log(StudentName.toUpperCase())
console.log(StudentName.trim())
console.log(StudentName.replace('shek',' D'))
console.log(phoneNumber.replace('-',''));
*/

//12. String Slicing.:-It's like sub-string (used to extract char from string)
/*
let fullName="Abhishek Dubalgunde"
let firstName,lastName;

firstName=fullName.slice(0,9)   //it's like sub-string in sql
lastName=fullName.slice(9)  //2nd, not nessesary when you're extracting lastwords

console.log(firstName)
console.log(lastName)

//Another-way to do it...//

 fullName='Harsha Bhogle'

firstName=fullName.slice(0,fullName.indexOf(' '))
console.log(firstName)

lastName=fullName.slice(fullName.indexOf(' '))
console.log(lastName)
lastName=fullName.slice(fullName.indexOf(' ')+1)
console.log(lastName)
*/

//13.Method Chaining...//
//:-Calling multiple methods by single line-of-code;
/*
let myName=" abhishek";

let temp=myName.trim().charAt(0).toUpperCase();

console.log(temp)   //A
*/

//14. if, if-else, if-else-if statements:-
/*
// let age=20;
let age=window.prompt('Enter here, How old are you.?')

if(age>=18){
    console.log('Hey, you can vote now...!')
}
else if(age<=0){
    console.log('You have not even born yet...!')
}
else{
    console.log("Sorry, kid you're not Eligible...!")
}
*/

//15.Check box by if-else statements:
/*
document.getElementById('payButton').onclick=function(){
    
if(document.getElementById('myCheckBox').checked)
{
    console.log('Checked...!')
} else
{
    console.log('Please Check our T&C')
}

if (document.getElementById('myWallet').checked) 
{
    console.log('Wallet has been Choosen...!')
} else if(document.getElementById('myUPI').checked)
{
    console.log('Upi method has been choosen.!')
}else
{
    console.log('Card has been selected for payment.!')
}
}
*/

//Switch Statement:
/*
let myChoice='A'

switch (myChoice)
{
    case 'A':
        console.log("You've passed with best marks.")
        break;
    case 'B':
        console.log("you've passed with good marks.")
    break;
    case 'C':
        console.log("you've passed with better than just passing marks.")
    break;
    case 'D':
        console.log("you've passed with just passing marks.")
    break;
    case 'F':
        console.log("you've Failed.")
    break;
        default:
            console.log(myChoice+' is not a valid choice.')
        break;
}
*/

//AND,OR,NOT operators:-
/*
let age=7;

if(age>=18 && age<=60)
{
    console.log("You are adult.")
}
else if(age<18 || age>60)
{
    console.log("You are not adult")
}
else
{
    console.log("Invalid age "+age)
}
*/
/*
let x=5;
console.log(x!=6)   //true
*/

//