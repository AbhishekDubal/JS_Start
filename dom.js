
// ** The Document Object Model (DOM):- is a programming interface for web documents.

//* It represents the page so that programs can change the document structure, style, and content.
//* Essentially, the DOM is a tree-like structure that represents all the elements on a web page.
//* Each element in the DOM is represented by a node, and nodes can have parent/child relationships with other nodes.

//* 1. Accessing elements:-

// The most common method is to use the getElementById() method, which takes an element ID as a parameter and returns the corresponding element. 

const myElement = document.getElementById('myElement');
//This code will assign the element with the id "myElement" to the myElement variable.

//* 2. Accessing element properties:-

//* Once we have an element, we can access its properties using dot notation. 
const textContent =myElement.textContent;
console.log(textContent);

//* 3. Adding event listeners:-

//We can add event listeners to elements in the DOM using the "addEventListener()" method.
//* This method takes two parameters: the event to listen for (e.g. "click", "keydown", etc.), and a function to call when the event occurs.
//* For example, to add a click event listener to an element, we can use the following code:-

myElement.addEventListener('click', function(){
    console.log('The myelement has clicked!');
});

//* 4. Creating elements:-

const newDiv = document.createElement('div');

//* 5. Appending elements:-

//We can add elements to the DOM using the appendChild() method.
// For example, to add the newDiv element created in the previous step to the body of the page,
// we can use the following code:-

newDiv.textContent="This is new text added to new div";
document.body.appendChild(newDiv);//this will helps to display on web
//This code will add the newDiv element to the end of the body element.

//* 6. Traversing the DOM:-

//* We can traverse the DOM using the "parentNode", "nextSibling", and "previousSibling" properties.
//* For example, to get the parent element of an element, we can use the following code:-

const parentElement =myElement.parentNode;
// This code will assign the parent element of the myElement element to the parentElement variable.

//* 7. Modifying elements:-

newDiv.textContent="Now you can modify the text!";

//* We can also modify the attributes of elements using the "setAttribute()" and "removeAttribute()" methods.
//* For example, to add a class attribute to an element,
//* we can use the following code:-

myElement.setAttribute('class', 'myClass');
//This code will add a class attribute with the value of "myClass" to the myElement element.

//*Similarly, to remove the class attribute from an element, we can use the "removeAttribute()" method:
myElement.removeAttribute('class');
//This code will remove the class attribute from the myElement element.


//* 8. Manipulating CSS:-
//We can manipulate CSS styles of elements using the style property.
// For example, to change the background color of an element:-

myElement.style.background="tomato";

//* 9. Finding elements:-

//* We can find elements in the DOM using various methods.
//* One common method is to use the "querySelector()" method,
//* which takes a CSS selector as a parameter and returns the first matching element.
//* For example, to get the first "p" element on the page, we can use the following code:

const firstParagraph = document.querySelector('p');
// This code will assign the first p element on the page to the firstParagraph variable.

//* 10. Iterating over elements:-

//We can iterate over elements in the DOM using various methods.
// One common method is to use the "querySelectorAll()" method,
// which takes a CSS selector as a parameter and returns a NodeList of all matching elements.
// We can then iterate over the NodeList using a forEach() loop.
// For example, to change the text color of all p elements on the page to blue:-

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(paragraph) {
  paragraph.style.color = 'blue';
});

// This code will change the text color of all p elements on the page to blue.

//* 11.Conclusion:
//In summary, the DOM is a powerful tool for manipulating web pages using JavaScript.
// We can access and modify elements, add event listeners, create and append new elements, traverse the DOM, manipulate CSS styles, find elements, and iterate over elements using various methods.
// Understanding the DOM is essential for any web developer, and with practice, it becomes easier to work with.



//Other uses of examples:-

//accessing elements in different ways:-
const title=document.getElementById('myTitle');
title.style.backgroundColor='skyblue';

const fruits= document.getElementsByName('fruits');

console.log(fruits[0].value);
console.log(fruits[1].value);
console.log(fruits[2].value);

fruits.forEach(fruit =>{
    if(fruit.checked){
        console.log('\n',fruit.value);//\n for new line in console result
    }
})

