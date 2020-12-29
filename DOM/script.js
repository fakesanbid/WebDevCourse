document.getElementsByTagName("h1");
document.getElementById("first"); 
// Since only one element belongs to a particular ID, it returns the elements
document.getElementsByClassName("second");
// It returns an array of elements. Use indexes to access the desired element

document.querySelector("h1");
// Selects 1st instance
document.querySelectorAll("h1"); 
// Selects All instances
document.querySelectorAll("h1, li");
// Selects Al instances of H1 and Li

document.querySelector("li").getAttribute("random");
// OUTPUT :  23
// Example Usage : grab width and height value of an image
document.querySelector("li").setAttribute("random", 1000);
document.querySelector("li").getAttribute("random");
// OUTPUT :  1000


// CHANGING STYLES
// document.querySelector("h1").style.background = "yellow";
// But this is not preferred due to interfarence to Separation of Concern
var h1 = document.querySelector("h1");
h1.className = "coolTitle";
// Giving H1 the class it deserves

document.querySelector("li").classList;
//return list of classes attached to the element
document.querySelector("li").classList.add("coolTitle");
// Add another class to it
document.querySelector("li").classList.remove("coolTitle");
// Removes the class mentioned
document.querySelector("li").classList.add("done");
// adds the class done to li
document.querySelector("li").classList.toggle("done");
// ON / OFF the class TRUE / FALSE the class

// BONUS : 

document.querySelector("h1").innerHTML = "<strong> !! </strong>";
// Changes HTML present in H1 to <strong> !! </strong>
document.querySelectorAll("li")[1];
// Selecting Jello, ie the 2nd element
document.querySelectorAll("li")[1].parentElement;
// Returns Ul
document.querySelectorAll("li")[1].parentElement.parentElement;
// Returns Body
document.querySelectorAll("li")[1].parentElement.parentElement.children;
// Returns All the elements in Body


// It is important to cache selectors in Variables
// We are using the same thing for ex : document.querySelector("li")
// Over and over again . And it takes web browser longer to act
// So we do : 
var h1 = document.querySelector("h1");

