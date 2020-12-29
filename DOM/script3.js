var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var idval = 6;
var butval = 66;
function inputLen(){
    return input.value.length;
}

function createList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.setAttribute("id", idval.toString());
    idval++;
    var btn = document.createElement("BUTTON");   
    btn.innerHTML = "Done";  
    btn.setAttribute("id", butval.toString());                
    li.appendChild(btn);
    butval++;
    ul.appendChild(li);  
    input.value = "";  
}

function addListAfterClick(){
    if(inputLen() > 0)
        createList();
}

function addListAfterKey(event){
    if(inputLen() > 0 && event.key === "Enter" )
        createList();
}


button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKey);
document.getElementById("parent").addEventListener("click", function(e) {
	if(e.target && e.target.nodeName == "LI") {
		e.target.classList.toggle("done");
	}
});

//-------------------------
