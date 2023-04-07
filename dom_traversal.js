// const element = document.body;
// const child  =element.firstElementChild;
// child.style.backgroundColor='red';

// const elements = document.querySelectorAll('#books');
// elements.forEach(function(element) {
//   const prevElement = element.parentElement;
//   if (prevElement) {
//     prevElement.style.backgroundColor = 'red';
//   }
// });
const element=document.querySelector('#books');
// const element=document.body
const child=element.children[0];
child.style.backgroundColor='yellow'

//.firstElementChild    //it'll consider 1st group if it is class or element
//.lastElementChild     //this won't work directly. 
//.parentSibling
//.nextElementSibling
//.previousElementSibling
//.children[]
