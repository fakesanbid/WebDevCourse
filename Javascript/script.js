var a = prompt("Are you above 18 ? ");
if(a.toUpperCase() == "YES")
    alert("ok");
else
{ 
    alert("What the Fuck , Karen");
    console.log("Yo");
}

// ---------------------------------------------------------------------------------------------------------------------------------------

function sayhello()
{
    console.log("Hello");
}

sayhello();

// ---------------------------------------------------------------------------------------------------------------------------------------

var a = function () {
    console.log("Bye")
}

a();
// Anonymous function
// We can also name it as :  var a = function byebye()

// ---------------------------------------------------------------------------------------------------------------------------------------

function sing(song){
    console.log(song);
}

sing("Lol");
sing("Wtf");

// ---------------------------------------------------------------------------------------------------------------------------------------

function multiply(a, b){
    if(a <= 10 || b <= 10)
        return console.log(a*b);
    else 
        return console.log("That's too hard !");
}

multiply(3, 3);

// ---------------------------------------------------------------------------------------------------------------------------------------

var ce = function (a, b){
    if(a <= 10 || b <= 10)
        return console.log(a*b);
    else 
        return console.log("That's too hard !");
}

ce(4,5);

// ---------------------------------------------------------------------------------------------------------------------------------------

function multiply(a, b){
        return a * b;
}

alert(multiply(8,5));

// ---------------------------------------------------------------------------------------------------------------------------------------

function multiply(a, b){
    return a * b;
}

console.log(multiply(8,5));

// ---------------------------------------------------------------------------------------------------------------------------------------

function multiply(a, b){ //parameters
    return a * b;
}

var total = multiply(8,5) //arguments
alert(total);