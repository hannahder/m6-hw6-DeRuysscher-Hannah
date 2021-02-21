//1st QUESTION:

// var listItem = document.getElementsByClassName('box');
//
//
// function myFunction() {
//   document.getElementById('box1').style.backgroundColor = "red";
//   document.getElementById('box2').style.backgroundColor = "red";
//   document.getElementById('box3').style.backgroundColor = "red";
// };
//
//
// for(i=0; i<listItem.length; i++) {
// listItem[i].addEventListener('mouseover', myFunction);
// };


//2nd QUESTION:

// var boxItem = document.getElementById('box1');
//
// function otherFunction() {
//   var myElement = document.createElement('h1');
//   var elementText = document.createTextNode('Oooh - so close, but no cigar');
//   myElement.appendChild(elementText);
//   document.body.appendChild(myElement);
// };
//
// boxItem.addEventListener('click', otherFunction);

//3rd QUESTION:

// var boxItem2 = document.getElementById('box2');
//
// function otherFunction2() {
//   var myElement2 = document.createElement('h1');
//   var elementText2 = document.createTextNode('DING DING DING - We have a winner');
//   myElement2.appendChild(elementText2);
//   document.body.appendChild(myElement2);
// };
//
// boxItem2.addEventListener('click', otherFunction2);

//4th QUESTION:

// var boxItem3 = document.getElementById('box3');
//
// function otherFunction3() {
//   var myElement3 = document.createElement('h1');
//   var elementText3 = document.createTextNode('Oops, butter luck next time');
//   myElement3.appendChild(elementText3);
//   document.body.appendChild(myElement3);
// };
//
// boxItem3.addEventListener('click', otherFunction3);


//5th QUESTION:

var navLinks = document.getElementsByClassName('box');
var hidden = document.getElementsByClassName('tohide');

function toggleDropdown() {
for(i=0; i < navLinks.length; i++) {
  hidden[i].classList.remove('tohide');
  };
};

for(i=0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', toggleDropdown);
};
