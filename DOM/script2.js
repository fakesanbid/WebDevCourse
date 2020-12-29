// document.getElementsByTagName("button");
// Reference : https://developer.mozilla.org/en-US/docs/Web/Events
// var button = document.getElementsByTagName("button")[0];
// [0] as it returns an array and we take the first element

// button.addEventListener("click", function (e) {
//     console.log("click!!!!");  })

// button.addEventListener("mouseenter", function (e) {
//     console.log("click!!!!");  })
//On hovering the cursor over the button, registers a response when mouse enters

// button.addEventListener("mouseleave", function (e) {
//     console.log("click!!!!");  })
//On hovering the cursor over the button, registers a response when mouse leaves

//------------------------------------------------------------------------------------------------------------------------------------

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function (e) {
    if(input.value.length > 0)
    {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);  
        input.value = "";  
    }
})
// Handles Mouse operation
input.addEventListener("keypress", function (event) {
    if(input.value.length > 0 && event.key === "Enter" )
    {
        // https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
        // Watch lecture from 17:30 - 19
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);  
        input.value = "";  
    }
})
// Handles "Enter" of keyboard operation

//--------------------------------------------------------------------------------------------------------------------------------------
// Refactoring above code  :

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLen(){
    return input.value.length;
}

function createList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);  
    input.value = "";   
}

function addListAfterClick(){
    if(inputLen() > 0)
        createList();
}

function addListAfterKey(event){
    if(inputLen() > 0 && event.keyCode === 13 )
        createList();
}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKey);