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

//16.Switch Statement:
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

//(17,18).AND,OR,NOT operators:-    ///////////////////
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

//(19,20).While, do-while loop: ///////////////////
/*
let myName='';

while(myName=='' || myName==null)
{
   myName= window.prompt('Enter your Name: ');
}
console.log('hey '+myName)
//do-while
do
{
    window.prompt("Enter here your name:")
}
while(myName==''|| myName==null);
console.log("hey2 "+myName)
*/

//21.for loop:      //////////////////
/*
for (let i = 3; i >0 ; i--) //i-=1 use if you want to insted i--
{
    console.log(i)  
}   
console.log('Happy New Year...!')
*/

//22. Difference between break and coninue: ////////////////
/*
for(let i=1;i<=10;i+=1)
{
    if(i==5)
    {
        break
    }
    console.log(i)  //1 2 3 4
}

for(let i=1;i<=10;i+=1)
{
    if(i==6)
    {
        continue
    }
    console.log(i)  // 6 7 8 9 10
}
*/

//23. Nested for-loop:  ////////////////////////
/*
let rows=window.prompt('Enter rows:');
let columns=window.prompt('Enter columns:');
for(let i=1; i<=rows;i++)
{
    for(let j=1;j<=columns;j++)
    {
        document.getElementById('displayOnWeb').innerHTML +=' *';
    }
    document.getElementById('displayOnWeb').innerHTML+="<br>" ;
}
//The reason why += is used instead of = is to add the new string to the existing string, instead of replacing the existing string.
*///By using +=, the new string is appended to the end of the existing string, allowing each iteration to add its own value to the display.

/*      //without using html part//
var rows = 5;
var columns = 5;

for(var i = 1; i <= rows; i++){
  for(var j = 1; j <= columns; j++){
    document.write(i * j + " ");
  }
  document.write("<br>");
}*/

/////////27.  VAR vs LET difference///////////////////////
/*
///VAR: has function level scope!
function example1()
{
    var x=1;
    if(true){
        x=2;
        console.log(x); //output:2
    }
    console.log(x); // output:2
}
example1(); //invoking or calling the function

///LET: has block level scope!
function example2() 
{
    let y = 1;
    if (true) {
      let y = 2;
      console.log(y); // Output: 2
    }
    console.log(y); // Output: 1
  }
  example2();   //invoke
  
  ///VAR is Hoisted, while LET is not.//
 function example3a()
 {
    if(true){
        console.log(z)  //output: undefined
    }
    var z=22;
 }
 example3a();// Invoke function
//~Another example of above VAR is Hoisted.
 function example3b()
 {
    z=10
    if(true){
        console.log(z)  //output: 10
    }
    var z=22;
 }
 example3b();// Invoke function
 //Because var variables are hoisted, the variable declaration is moved to the top of the function,

 ///LET: isn't Hoisted.!
function example4()
{
    if(true)
    {
        console.log(a); //output: Uncaught ReferenceError: Cannot access 'a' before initialization
    }
    let a=30;
}
example4();//Invoke

//Another general EXTRA example

for(var i=1;i<=4;i++){
     console.log(i)     //output:1 2 3 4
}
console.log(i)  //output: 5 (Because the i++ is post increment, so it was holding a value)
*/

//////24. Functions: block of code use for reusabality of code./////
/*
function mathematics(x,y)   //NOTE: here x,y works and not nessesary in function you have to take a,b
{
    // let a=10,b=2     //Works
    console.log('addition of two numbers is: ',(a+b));  //12
    console.log('subtraction of two numbers is: ',(a-b));   //8
    console.log('multiplication of two numbers is: ',(a*b));//20
    console.log('Divison of two numbers is: ',(a/b));   //5
}
let a=10,b=2
mathematics(a,b);   //Invoke function. 
*/

////(25).Return in function: It returns value when you invoke function//////
/*
function addition(a,b){
    let c=a+b;
    return c;
}
var a,b;
let result=addition(20,10);
console.log(result);

//Another example:
let hight=window.prompt("Enter hight : ");
let width=window.prompt("Enter width : ");
let  area;
function totalArea(hight,width){
     area=hight*width;
    return area;
}
let r=totalArea(hight,width)
console.log(r); //You can directly put "area" in log, by skipping above line of code.
*/

////(26).Ternary Operator: shortcut for if/else statement//////
//condition ? expressionIfTrue : expressionIfFalse
/*
function checkAdult(age){
    return age>18 ? true : false;
}
// let age=30; //NOTE: You Do Not have to write this.
let result=checkAdult(24);
console.log(result);
*//*
//Another example:-
function checkOddEven(number){
    number%2==0 ? console.log('Number is Even') : console.log("Number is Odd")
}
let x=checkOddEven(13);
*/
//The same program works in other way aswell.shown below...
/*
function checkOddEven(number){
    number%2==0 ? console.log('Number is Even') : console.log("Number is Odd")
}
let x=checkOddEven(true);
*/

////(28). Template Literals:- Instead of "" and '' we can use ``.///////
/*
let myName='Rohit';
let myAge=23;
let mySalary=5000;
//Normal way
console.log('Hey, guys. This is ',myName);
console.log('I am ',myAge, 'year old');
console.log("My salary is $"+mySalary);

//#1.By using ``
console.log(`Hey,guys. This is ${myName}`)
console.log(`I am ${myAge} year old now`);
console.log(`My salary is $${mySalary}`);
//#2.
let information=`Hey,guys. 
This is ${myName}
I am ${myAge} year old now.
My salary is $${mySalary}`;

console.log(information);
//#3.On website display
    information=`Hey,guys. <br>
    This is ${myName}       <br>
    I am ${myAge} year old now. <br>
    My salary is $${mySalary}`;
    document.getElementById('displayOnWeb').innerHTML = information;
    */

    ////29.Currency Format:        /////////////////
/*
    let myMoney=64785456.548;
    console.log(myMoney);
    // myMoney=myMoney.toLocaleString('hi-IN');    
    // console.log(myMoney);       //6,47,85,456.548
    // myMoney=myMoney.toLocaleString("en-US")
    // console.log(myMoney);       //64,785,456.548
    // myMoney=myMoney.toLocaleString("de-DE")  //German
    // console.log(myMoney)          //64.785.456,548

//      myMoney=myMoney.toLocaleString("en-US", {style:"currency", currency:"USD"})   //$64,785,456.55
        // myMoney=myMoney.toLocaleString("hi-IN", {style: "currency", currency:"INR"})  //₹6,47,85,456.55
        myMoney=myMoney.toLocaleString("DE-DE", {style:"currency", currency:"uro"})
        console.log(myMoney);       //64.785.456,55 URO

        let num=78;
        // num=num.toLocaleString(undefined, {style:"percent"})
        // console.log(num);    //7,800%

        num=num.toLocaleString(undefined, {style:"unit", unit:"celsius"})
        console.log(num);      //78°C
*/

///30. Number Guess Game:       ////////////
/*
let answer=Math.floor(Math.random ()* 10 + 1);
let count=0;
let myGuess;
document.getElementById('submitButton').onclick= function(){
    myGuess=document.getElementById('enteredInBox').value;
    myGuess=Number(myGuess)
    count+=1;

    if(answer==myGuess)
    {
        console.log(`Your guess is Correct.! You took ${count} times to get it done.`)
    }
    else if(answer< myGuess){
        console.log(`Your guess is smaller than the Actual Number`)
    }
    else if(answer> myGuess){
        console.log(`Your guess is greater than the Actual Number`)
    }
    else{
        console.log(`your guess is wrong. Try again.!`)
    }
    console.log(answer, myGuess)//Additional line for better checking the both results
}
*/

///((31)).Temperature to Celsius and Fahrenhiet:-   /////////
/*
let temperature;

function toCelsius(temperature){
   return (temperature-32)*(5/9);
}

function toFahrenhiet(temperature){
    return (temperature*(9/5))+32;
}

document.getElementById('submitButton').onclick=function(){
    if(document.getElementById('Celsius').checked){
        temperature=document.getElementById('tempInput').value;
        temperature=Number(temperature);
        temperature=toCelsius(temperature);
        document.getElementById('resultLabel').innerHTML=temperature,°C;
    }
    else if(document.getElementById('Fahrenhiet').checked){
        temperature=document.getElementById('tempInput').value;
        temperature=Number(temperature);
        temperature=toFahrenhiet(temperature);
     document.getElementById('resultLabel').innerHTML= temperature,°F;
    }
}
*/

///(32). Array:- It's a container, having group of elements.
/*
let students=["Abhi", 'Virat', "Rohit","AB"];

console.log(students)   //output= (4) ['Abhi', 'Virat', 'Rohit', 'AB']

students[0]="Starc";    //output=(4) ['Starc', 'Virat', 'Rohit', 'AB']
console.log(students)   //Because it'll override the previous value and print current value.

students.push("Maxwell");
console.log(students);  //it'll add element at last

students.pop();
console.log(students);  //it'll delete last element

students.shift();       
console.log(students);  //it'll delete first element

students.unshift("Chriss");
console.log(students);  //it'll add element at first.

let length=students.length;
console.log(length);     //4

let index=students.indexOf("Virat");
console.log(index);     //1
*/

///(33). Printing 2D-Array by nested for-each:
/*
let fruits=['banana','mango',"apple"]
let chakhna=['lays','kurkure','chips']
let drinks=['sprite','cocacola','thumbsup']

let buyingList=[fruits, chakhna,drinks]

console.log(buyingList); //output:- (3) [Array(3), Array(3), Array(3)]

buyingList[0][1]="Lemon";
for(let list of buyingList){
    for(let bought of list){
        console.log(bought);
    }
}
*/

////(34). Array of string elements sorting:-/////
/*
let fruits=['banana','mango',"apple"]
fruits.sort();
console.log(fruits);    //(3) ['apple', 'banana', 'mango']

for(let x of fruits){
    console.log(fruits);
}
//Reverse order
fruits.sort().reverse();
console.log(fruits);    //(3) ['mango', 'banana', 'apple']

for(let y of fruits){
    console.log(fruits);
}
*/

////(35). Printing arrays numbers:
/*
let num=[2,4,5,6,8];

for(let i =0;i<num.length;i++){
    console.log(num[i])
}
//OR
for(let i of num){
    console.log(i)
}

////(36). Sort numbers of array elements:-  ///////

let numbers=[11,2,4,43,5,22,5,57,36]

numbers.sort(); //NOTE: It'll only consider 1st element of each number.
                //So, it'll only better usefull for string cases.
console.log(numbers);   // [11, 2, 22, 36, 4, 43, 5, 5, 57]
numbers.sort().reverse();
console.log(numbers);   //[57, 5, 5, 43, 4, 36, 22, 2, 11]
*/

///(37). Spread operator(...):-it'll unpacks the elements.
/*
let x=[2,3,26,74,84,30,5];

console.log(...x);//it'll sperad the the elements and print.

let maximum=Math.max(...x);//84
console.log(maximum);

let class1=['student1','student2','student3']
let class2=['student4','student5','student6']
class1.push(...class2)  //add class2 elements in class1
console.log(...class1); //helps to print in right manner
*/

///(38). Rest Parameter(...):- It'll packs the elements.
/*
let result=sum(10,20,33,222,24);

function sum(...anything){
    let total=0;
    for(let x of anything){
        total += x;
    }
    return total;
}
console.log(result);
*/

///(39). CallBack :-is a function passed as an argument to another function.
//It'll help you to make sure that function is not going to run before a task is complted. 
/*
sumOfNumbers(5,10,20,30,resultOnConsole);
sumOfNumbers(5,10,20,30,resultOnWeb);

function sumOfNumbers(a,b,c,d,callingBack){
    let result=a+b+c+d;
    callingBack(result);
}

function resultOnConsole(result){
    console.log(result);
}

function resultOnWeb(result){
    document.getElementById('label').innerHTML=result;
}
//NOTE: We could have done it in easy way. But this way will help us to complete the task first and get the result and then call the method which is going to execute.
//Basic reason is to not get the error because of value didn't had while calling method.
*/

////(40). forEach():

//#1st way. with FUNCTION keyword (Because there are multiple ways to print forEach())
let RCB=['virat','ab','chahal','harshal'];

RCB.forEach(function(element,index,array){  ///In place (e,i,a) you can take anything
    array[index]=element.toUpperCase()
}); //Here above line will make to uppercase letter to all elements.
for(let element of RCB){
    console.log(element);
}

//#But what if I want only first letter capital.
let India=['dhoni','sachin','sehwag','harbhajan'];

India.forEach(function(element,index,India){
    India[index]=element.charAt(0).toUpperCase() + element.slice(1);
});

for(let element of India){
    console.log(element);
}

//#You can also change RCB example and make 1st letter Upper and rest lowercase
 RCB=['VIRAT', 'AB', 'CHAHAL', 'HARSHAL']
RCB.forEach(function(element,index,RCB){
    RCB[index]=element.toLowerCase().charAt(0).toUpperCase() + element.slice(1).toLowerCase()
});

for(let element of RCB){
    console.log(element);
}

///#2nd way of forEach() withouT FUNCTION keyword by (>=):
let names = ['alice', 'bob', 'charlie'];

names.forEach((element,index)=>{
    names[index]=element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
});

names.forEach(element =>{
    console.log(element)
});
