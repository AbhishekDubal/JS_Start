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
/*
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
*/

////(41). map() method: 
//It'll perform the operation on each elements and return a complete array itself by updating the each elements beased on there previous value.
/*
//#1 example: Square each elements of array.
let numbers = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map(function(number) {
  return number * number;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

//#2.Example:- power of each elements.

numbers=[1,2,3,4,5];

let powerOfElements=numbers.map(function(element){
    return Math.pow(element,4);
});

console.log(powerOfElements);   //output: [1, 16, 81, 256, 625]

//#3.Example:-"'Converting data types'": map() can be used to convert data types. For example, suppose we have an array of strings representing numbers, and we want to convert them to actual numbers:
 
let stringNumbers=['2','3','4','32','22'];

let convertToNumbers= stringNumbers.map(element =>{
    return parseInt(element);
})

console.log(convertToNumbers);  //output: [2, 3, 4, 32, 22]

//#4.Ex:-Transforming arrays of objects:
let buyingProducts=[{product:'Oil', price: 50},{product: 'brush',price:130},{product: 'powder', price:230}];

let NamesAndPricesOfProducts = buyingProducts.map( name =>{
    return {
        product: name.product , price : name.price
    }
});

console.log(NamesAndPricesOfProducts);

for(let x of NamesAndPricesOfProducts){
    console.log(x)
}
*/

//\\\\\\\\\\forEach() vs map() difference:\\//\\///\\/\//\/\/
/*Difference between forEach() and map() is that 'map()' returns a new array with the same number of elements as the original array, while forEach() doesn't create a new array.
*/
/*
let numbers = [1, 2, 3, 4, 5];

// Using forEach()
numbers.forEach(function(number) {
  console.log(number * 2);
});

// Using map()
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers);
*/

//\/\(42). filter():
// filter() can be useful for a variety of tasks, such as:

//* Filtering out null or undefined values from an array.
//* Filtering out duplicate values from an array.
//* Filtering out values that don't meet certain criteria, such as values that are too small or too large.
/*
let ages=[21,30,12,42,10,13,32];

let EligibleVoters = ages.filter((element) =>{
    return (element>=18);
});
console.log(EligibleVoters);

//EvenNumber example:
let numbers=[1,2,3,4,5,6,7,9,8,10];

let EvenNumbers = numbers.filter( element =>{
    return element % 2 ===0;
})
console.log(EvenNumbers);
*/

//\\#(43).Difference b/w (`=`,`==`,`===`):- \\\\\\\\

//*\The = operator is the assignment operator, which is used to assign a value to a variable. It is not a comparison operator, and cannot be used to compare values.

//*\The == operator is the equality operator, which checks whether two values are equal. However, it performs type coercion, which means that it may convert one of the values to a different type in order to compare them. For example, "5" == 5 is true, because the string "5" is converted to the number 5 before the comparison is made.

//*\The === operator is the strict equality operator, which checks whether two values are equal and of the same type. It does not perform type coercion, so "5" === 5 is false, because the types are different.

//*\In the example I provided, we are checking whether the current number in the array is even. We use the modulus operator (%) to check whether the number is divisible by 2 (which is the definition of an even number). If the remainder is 0, the number is even, so we want to return true.

//*\We use the strict equality operator === to check whether the remainder is equal to 0. This is because we want to make sure that the remainder is not only a falsy value (like null, undefined, or 0), but also of the correct type (number).

//*\ If we used the loose equality operator ==, it would perform type coercion, which could lead to unexpected results. For example, if the remainder was false, it would be coerced to the number 0, which would incorrectly be considered even. Therefore, we use the strict equality operator === to ensure that we are checking for the correct type and value.

//Example:=
/*
console.log(5 == "5");   // true
console.log(5 === "5");  // false
*/
//*\ In the first example, the == operator performs type coercion, so it converts the string "5" to the number 5 before making the comparison. Since 5 is equal to 5, the result is true.

//*\  In the second example, the === operator does not perform type coercion, so it checks whether the values are of the same type and have the same value. Since 5 and "5" are not of the same type, the result is false.

//Here's another example:
/*
console.log(null == undefined);   // true
console.log(null === undefined);  // false

 * In the first example, the == operator performs type coercion, so null is converted to undefined before making the comparison. Since null and undefined are considered equivalent in JavaScript, the result is true.

 * In the second example, the === operator does not perform type coercion, so it checks whether the values are of the same type and have the same value. Since null and undefined are not of the same type, the result is false.
 */

///(44). Reduce(): Allows you to apply a function to each element of an array and reduce the array to a single value.
/*
let prices=[200,324,654,234];

let totalBill=prices.reduce((totalBill,element) =>{     //element is current value. 
    return totalBill+element;
},0);
console.log(totalBill);

//another exmple:=
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 15
*/

///(45). Sort array of numbers  \\\\\\
/*
let rupees=[20,30,23,42,3,42,43,2];

let descendingOrder= rupees.sort((x,y)=>{
    return y-x;
});
console.log(descendingOrder);

let ascendingOrder = rupees.sort(function(firstElemenet,secondElement){
    return firstElemenet-secondElement;
})
console.log(ascendingOrder)
*/

///(\46). => instead of function keyword:
/*
let numbers = [2,5,3,73,5,6,78,33];

function descendingOrder(x,y){
    return y-x;
}

function print(element){
console.log(element);
}
numbers.sort(descendingOrder);
numbers.sort(print);

numbers.sort((x,y) =>{
    return x-y;
})
numbers.forEach(element => console.log(element));
*/

///\(47.\) Cards number printing:-

/*
let suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

let deck = [];

for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    deck.push(values[j] + " of " + suits[i]);
  }
}
//now printing the results in two ways. 2nd one is best...!
// console.log(deck);              //#st way
// for(let element of deck){ 
//     console.log(element);       //#2nd way
// }

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));    //suppose math.floor((0.92) * (12 + 1)) //math.floor(11.96) // output= 11 (because of floor method)
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  
  shuffleDeck(deck);    //invoke function

  for (let element of deck){
    console.log(element);
  }
//   console.log(deck);
*/
/*
let typesOfCards=['Diamond','Spades','Club','Hearts'];
let valueOfCards=["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let totalCards=[];

for(let i=0;i<typesOfCards.length;i++){
    for(let j=0;j<valueOfCards.length;j++){
        totalCards.push(valueOfCards[j]+' of '+typesOfCards[i])
    }
}
// console.log(totalCards);
function ShuffleCards(totalCards){
    for(let i=totalCards.length-1;i>0;i--){
        const j=Math.floor(Math.random() * (i+1));
        [totalCards[j],totalCards[i]]=[totalCards[i],totalCards[j]]
    }
}

ShuffleCards(totalCards);   //calling function

for(let element of totalCards){
    console.log(element);   //printing cards
}
*/

///(48). nested function: function inside another function.
/* Used for security sake.
 * Because function which is inside function will not able to acces directly.
 * with outside function name we can invoke inside function.
 */
/*
let username ="Abhishek";
let balance =50000;

log_in();   //invoke

function log_in(){
getUserName();
getBalance();

function getUserName(){
    console.log(`Hey! ${username}`);
}
function getBalance(){
    console.log(`You've still $${balance} in account.`);
}
}
*/

////(49). Map:-
/*
let flipcart = new Map([
    ['Charger',383],['Headphones',473],['pant',543],['SmartWatch',833]
]);

flipcart.forEach((price,product) => {
    console.log(`$${price} for ${product}`);
});

let shoppingCart=0;
shoppingCart+=flipcart.get('SmartWatch');
shoppingCart+=flipcart.get('pant')
console.log(shoppingCart);

flipcart.set('Shoes',400);
console.log(flipcart);

flipcart.delete('pant');
console.log(flipcart);

console.log(flipcart.has('pant'));  //false

console.log(flipcart.size);

flipcart.clear();
console.log(flipcart);
*/

///. Object Oriented Progrqamming:(OOPs)    \\\\\\\\\\\\\\\\
//(50). "Object":- Anything that exists physically, and should be having properties and functionality.
/*
 const car1 = {
    carName : 'Tata', color: 'Red', 
    run:function(){
        console.log(`car is running.!`);
    },
    brake: function(){
        console.log(`car has stoped.`);
    }
 }
 
 const car2 = {
    carName : 'Ford', color: 'Blue', 
    run:function(){
        console.log(`car is running.!`);
    },
    brake: function(){
        console.log(`car has stoped.`);
    }
 }
 
 console.log(car1.carName);
 console.log(car2.color);
 console.log(car1.color);
 car1.run();
 car1.brake();
 car2.run(); car2.brake();
 */

///(51). this keyword: refers current object.

/*
const car1 = {
    carName : 'Tata', color: 'Red', 
    run:function(){
        console.log(`${this.carName} is running.!`);
    },
    brake: function(){
        console.log(`${this.carName} has stoped.`);
    }
 }
 
 const car2 = {
    carName : 'Ford', color: 'Blue', 
    run:function(){
        console.log(`${this.carName} is running.!`);    //this: refers currwnt object.
    },
    brake: function(){
        console.log(`${this.carName} has stoped.`);
    }
 }
 
 console.log(car1.carName);
 console.log(car2.color);
 console.log(car1.color);
 car1.run();
 car1.brake();
 car2.run(); car2.brake();
 */

 ///(52). // "Class":- (Template for other object,Blueprint)
 //*\class is named group of properties and functions. 
/*
class Student 
{
    //NOTE:- you don't have to write datatype and function keywod inside class as we do in JAVA.
   
    marks=32;

     supplemmentary(){
        console.log(`Student want to give supplemmetary exam.!`);
    }
    revaluation(){
        console.log(`Student has applied for Revaluation`);
    }
}
const student1= new Student();  //Create object of class.
const student2 = new Student(); //doesn't matter how many you create.

console.log(student1.marks);
console.log(student2.marks);

student1.revaluation();
student1.marks+=3;
console.log(student1.marks);

student2.supplemmentary();
student2.marks +=20;
console.log(student2.marks,` student2 got pass`);
*/

///(53).Constructor:-Special type of method.
// Used to initialize the object, because it takes parameter as a value.
/*
class car 
{
    constructor(name,color,price){
        this.name=name;
        this.color=color;
        this.price=price;
    }

    run(){
        console.log(`${this.name} has started running.!`);
    }
}

const car1=new car("Thor",'blue',52220);    //Object creation and calling constructor

console.log(car1.name);
car1.run();
console.log(car1.color);
console.log(car1.price);

const car2=new car('Vitara Brezza', ' Blue',98379);////2nd Object creation with same template of class and calling constructor
console.log(`${car2.name} has ${car2.color} color, and it costs $ ${car2.price}`);
car2.run();
*/
/* //Another example:
class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  const rect1 = new Rectangle(5, 10);
  console.log(rect1.area()); // outputs 50
  */

  ////(54).static:-
  /* "static" keyword is used to define methods or properties that belong to the class itself, rather than to instances of the class.
   *  This means that you can call static methods or access static properties on the class itself, without having to create an instance of the class. 
   * */
  /*
  class Calculator
  {
    static addition(a,b){
        return (a+b);
    }

    static subtraction(a,b){
        return (a-b);
    }
  }
  const result1=Calculator.addition(40,10);
  console.log(result1);//output : 50

  let result2= Calculator.subtraction(30,20);
  console.log(result2);//output:10
  */
 //Another example with NON-STATIC and STATIC methods:-

//  class Person 
//  {
//     constructor(name, age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     greeting()  //Non-static method
//     {
//         console.log(`Hey! My name is ${this.name} and I'm ${this.age} year old.!`);
//     }

//     static getAdults(persons)
//     {
//         return persons.filter(person =>person.age >= 18);//Here the person is like element. and persons are like array of elements
//     }
    
//  }
//  const person1=new Person("Abhishek",23);
//  person1.greeting(); //output: Hey! My name is Abhishek and I'm 23 year old.!

// const person2 =new Person("Rohit",16);
// person2.greeting();//output: Hey! My name is Rohit and I'm 16 year old.!

// const persons =[person1,person2]; //array of person elements

// const adults=Person.getAdults(persons);
// console.log(adults);
/*
///Same example:
class Person
{
    constructor(name, age)
    {
        this.name=name;
        this.age=age;
    }
    greeting()
    {
        console.log(`Hello! I am ${this.name} and I'm ${this.age} year old!`);
    }

    static getAdult(persons)
    {
        return (persons.filter(element => element.age >= 18))
    }
}

const person1 = new Person("ABhi",24);
const person2 = new Person("Vikas",14);

person1.greeting();
person2.greeting();

const persons =[person1,person2];

const adults= Person.getAdult(persons);
for (let adult of adults)
{
    console.log(adult);
}
*/
//In summary, static methods are useful when you need to define functionality that is related to the class as a whole, while non-static methods are useful when you need to define functionality that is specific to each individual instance of the class.

//Another simple example:-
/*
class Car 
{
    static countTheCars=0;

    constructor(carName)
    {
        this.carName=carName;
        Car.countTheCars+=1;
    }
    static startTheRace()
    {
        console.log(`Race starts in 3... 2... 1... Go!`);
    }
}

const car1 = new Car("Farari")
const car2 = new Car("Thor");
const car3 = new Car("Vitara Breza");

console.log(Car.countTheCars);
Car.startTheRace();
*/


///\\/\(55).Inheritance: one class inherits, another class to acces all the properties and functions of it.
/*
class Animal
{
    alive=true;
    constructor(name)
    {
    this.name=name;
    }
    eat()
    {
        console.log(`${this.name}  do eat!`);
    }
    sleep()
    {
        console.log(`${this.name} do sleep.!`);
    }
}
class Cat extends Animal
{
    run()
    {
        console.log(`${this.name} do walk!`);
    }
}
class Fish extends Animal
{
    swim()
    {
        console.log(`${this.name} can't run, they do swim.!`);
    }
}
class Bird extends Animal
{
    fly()
    {
        console.log(`${this.name} can't swim and run, but they do fly.!`);
    }
}
const cat = new Cat("Cats")
console.log(cat);   //output: Cat {alive: true, name: 'Cats'}
cat.eat();  //output: Cats  do eat!

const fish = new Fish("Fishes");
console.log(fish);  //output: Fish {alive: true, name: 'Fishes'}
fish.sleep();   //output: Fishes do sleep.!

const bird = new Bird("BIRD");
console.log(`Is bird alive?:- ${bird.alive}`);//output: Is bird alive?:- true
bird.eat(); // output: BIRD  do eat!
bird.sleep(); //output: BIRD do sleep.!
bird.fly(); //output: BIRD can't swim and run, but they do fly.!
*/
/**You should create a object of Sub-class.
 * It's not like you can not create object of Parent(super)class, you can... but, you'll be not getting the benifits of inheritence.
 * By creating the object of sub-class you can also get or can able to acces the properties and functions from both parent and sub classes. 
 * But if you had a object of parent then you could be able acces the parent class properties and functions itself.!
 */

///\\(56).super keyword:-
//The `super` keyword can be used in two ways:
//#1. To call a method in the superclass:
/*
class Animal {
    constructor(name) {
      this.name = name;
    }
    
    makeSound() {
      console.log("The animal makes a sound");
    }
  }
  
  class Dog extends Animal {
    constructor(name) {
      super(name); // call the constructor of the superclass
    }
    
    makeSound() {
      super.makeSound(); // call the makeSound() method of the superclass
      console.log("The dog barks");
    }
  }
  
  const dog = new Dog("Max");
  dog.makeSound();
   // Output: The animal makes a sound
   //         The dog barks
  */

   //#2. To access properties in the superclass:-
   /*
   class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getInfo() {
        return `${this.name} is ${this.age} years old`;
      }
  }
  
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age); // call the constructor of the superclass
      this.breed = breed;
    }
    
    getInfo() {
      return (`${this.name} is a ${this.breed} and is ${this.age} years old`);

    }
    
    getFullInfo() {
      return (`${super.getInfo()} and likes to play fetch`); // access the getInfo() method of the superclass
    }
  }
  
  const dog = new Dog("Max", 3, "Golden Retriever");
  console.log(dog.getFullInfo()); // Output: Max is a Golden Retriever and is 3 years old and likes to play fetch
  */

//\\/(57). get and set :-

//* Note that the get and set methods are defined without the function keyword and are accessed like regular properties, not like methods.

//\\#GET:- We use get set for privary sake.
/*
class Student
{
    constructor(name,rno){
        this._name=name;
        this._rno=rno;
    }
    
    get detailsOfStudent(){
       return `${this._name} is student name and RollNumber is ${this._rno}.!`
    }
}
const student1=new Student("Abhi",01);
// student1.name="rohit"; // NOTE:- if you don't use `_` then name of student1 would have chnged to `rohit` from here.
//So, to avoid that and because of we need a security, we do use `get` and `_` inside it.
let print=student1.detailsOfStudent; //HERE, don't have to take paranthasis, because get doesn't considered as method while retrive it.
console.log(print);
*/

//#SET:- we can update the set method values. where get method is just to retrive the data.
/*
class Students
{
    constructor(firstName, lastName){
        this._lastName=lastName;
        this._firstName=firstName;
    }
    get FullName(){
      return `${this._firstName} ${this._lastName}`
    }
 //NOTE: You should be having only single parameter value inside SET method. Remember it, it's a new version rule;
    set firstName(firstName){  
       this._firstName=firstName;
    }

    set lastName(lastName){
        this._lastName=lastName;
    }
}
const student1 = new Students("Abhishek","Dubalgunde");

console.log(student1.FullName);     //output:- Abhishek Dubalgunde
console.log(student1._firstName);   //output:- Abhishek
student1.firstName="Rohit"          
console.log(student1._firstName);   //output:- Rohit
console.log(student1.FullName);     //output:- Rohit Dubalgunde
*/

///(58). Passing object to functions as an argument:-
/*
class Car 
{
    constructor(model,year,color){
        this.color=color;
        this.model=model;
        this.year=year;
    }
}

const car1=new Car("Tata",2022,"White");
const car2 = new Car("Brezza",2020,'Dark_blue');
const car3 = new Car("Ferrari",2015,"Sky_blue");

function displayAllDetails(car){
console.log(car.model);
console.log(car.year);
console.log(car.color);
}
displayAllDetails(car1);//Passing referance object as parameter of function
displayAllDetails(car2);
displayAllDetails(car3);
*/

///\(59). Array of object references :-\\\\\\\\\\\\\\\\\\\\\\
/*
class Car 
{
    constructor(model,year,color){
        this.color=color;
        this.model=model;
        this.year=year;
    }
}

const car1=new Car("Tata",2022,"White");
const car2 = new Car("Brezza",2020,'Dark_blue');
const car3 = new Car("Ferrari",2015,"Sky_blue");

const cars=[car1,car2,car3];

console.log(cars[0].color); //white
console.log(cars[2].year);  //2015
console.log(cars[1].model); //Brezza

cars.forEach(car => {
    console.log(car);
});
//Outut:
//{color: 'White', model: 'Tata', year: 2022}
//{color: 'White', model: 'Tata', year: 2022}
// {color: 'Sky_blue', model: 'Ferrari', year: 2015}
cars.forEach(car => {
    console.log(`Model: ${car.model}\nYear: ${car.year}\nColor: ${car.color}\n`);
  });
//*\\\\\output:-
Model: Tata
Year: 2022
Color: White

Model: Brezza
Year: 2020
Color: Dark_blue

Model: Ferrari
Year: 2015
Color: Sky_blue
*/

////(60).Anonymous Objects:
//Object without reference_variable. It'll make less complicate and we don't have to have lot of names.
/*
class Car 
{
    constructor(model,year,color){
        this.color=color;
        this.model=model;
        this.year=year;
    }
}

const cars=[new Car("Tata",2022,"White"),new Car("Brezza",2020,'Dark_blue'),new Car("Ferrari",2015,"Sky_blue")];

cars.forEach(element => {
    console.log(`NAME is: ${element.model}, Year:-${element.year}, color is: ${element.color}`);
});
//It's works same as previous topic.
*/
/*
//you can also add another object like:-
class Car {
    constructor(model, year, color) {
      this.color = color;
      this.model = model;
      this.year = year;
    }
  }
  
  const car1 = new Car("Tata", 2022, "White");
  const car2 = new Car("Brezza", 2020, "Dark_blue");
  const car3 = new Car("Ferrari", 2015, "Sky_blue");
  
  const cars = [car1, car2, car3, new Car("BMW", 2023, "Black")];
  
  console.log(cars[0].color); // Output: White
  console.log(cars[2].year); // Output: 2015
  console.log(cars[1].model); // Output: Brezza
  
  cars.forEach((car) => {
    console.log(car);
  });
  */

  ////(61). Error in JavaScript:-   4-types \\\\\\\\\\\\
//1.Syntax errors: These occur when you make a mistake in the syntax of your code. For example, forgetting to close a parentheses, forgetting to put a semicolon at the end of a statement, or using a reserved word as a variable name.
/*
// Example of syntax error
if (x === 5 {
    console.log('x is 5');
}
// Error: Missing closing parentheses
*/

//2. Reference errors: These occur when you try to access a variable or function that hasn't been defined. For example, trying to use a variable that you forgot to declare, or trying to call a function that doesn't exist.
/*
// Example of reference error
console.log(y); // Error: y is not defined

function multiply(a, b) {
    return a * b;
}

divide(10, 5); // Error: divide is not defined
*/

//3. Type errors: These occur when you try to use a value of the wrong type. For example, trying to call a method on a string value, or trying to add a number and a string together.
/*
// Example of type error
let num = 10;
// num.toUpperCase(); // Error: num.toUpperCase is not a function

let str = "hello";
console.log(str + 5); // Error: can't convert number to string
*/

//4. Logic errors: These occur when your code doesn't do what you intended it to do. For example, using the wrong operator in a mathematical calculation, or writing a condition that doesn't evaluate to what you expect.
/*
// Example of logic error
let price = 10;
let tax = 0.2;
let total = price + price * tax; // Error: Should be price * (1 + tax)
console.log(total);
*/

/////(62).Examples of how to handle exceptions in JavaScript:-
//1.Using try-catch block,
//2.Using throw statement,
//3.Using finally block,
//4.Using Error object.

/*
//1.Using try-catch block:-
try {
    // code that may throw an error
    let x = y + 10;
  } catch(error) {
    // code to handle the error
    console.log('An error occurred:', error); //output:An error occurred: ReferenceError: y is not defined.
  }
  */

  //2. Using throw statement:-
  /*
function divide(a,b){
    if(b===0)
    {
        throw "You can not divide any number by ZERO"
    }
    return a/b;
 }
 try{
    let result=divide(20,0);
 }
 catch(error){
    console.log("ERROR occured: ", error);
 }
 //output: ERROR occured:  You can not divide any number by ZERO
 
//You can also create object using throw keyword.
function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  try {
    let result = divide(10, 0);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
  // Output: Division by zero is not allowed.
  */

  //3.Using finally block:-
  /*
  try {
    // code that may throw an error
  } catch(error) {
    // code to handle the error
  } finally {
    // code to be executed regardless of whether an error occurred or not
  }
  */

 //4.Using Error Object:-
 /*
  try {
    // code that may throw an error
    let x = y + 10;
  } catch(error) {
    // code to handle the error
    let customError = new Error('An error occurred');
    customError.name = 'CustomError';
    customError.message = error.message;
    console.log(customError);
  }
  //output:- CustomError: y is not defined
*/

///(63). setTimeout() and setInterval() methods:-just like sleep method in java.
//Used to excecute the function after certain delay of seconds.
//Asynchronous method(doesn't pause your excecution.)


//The difference between is setTimeout() used for delaying the results for certain time
// and it'll not repeat. It'll used for only one time delay and display.
//But, setInterval() used for repeating the task of delaying and displaing again and again until we stop it.

//\\\\\\\\setTimeout() /////////////
/*
function sayHello(name,name2) {
    console.log('Hello, ' + name,name2 + '!');
  }
  
  setTimeout(sayHello, 3000, 'John','Abhi');//after 3second delay the result will be shown.
  //output: Hello, John!
*/

function delayMethod1(){
    window.alert("This website might harm your device!");
}
function delayMethod2(myName)
{
    alert(`Are you sure? ${myName}!`)
}
//Two ways to invoke
setTimeout(() => {
    delayMethod1()      //after two sec
}, 2000);

setTimeout(delayMethod2,6000,"ABHISHEK")    //after 6 sec,(after 4 sec of 1st method, Because this is Asynchronous function,and it won't pause your excecution.)
