var list = ["Tiger","Cat","Lion","Cow"];
console.log(list[0]);

var num = [1,2,3,4];
var bool = [true, false, true, true];
var funct = [function apple() { console.log("Apples");}, function couples(){console.log("Cowples");}]; 
var mixList = [1, "Cat", true, function apple() { console.log("Apples");}]; // Not adviced due to performance issues

var d2arr = [
    ["Tiger","Cat","Lion","Cow"],
    ["T","Ca","L","C"]
]

var list = ["Tiger","Cat","Lion","Cow"]; 
// try 'em in console
list.shift(); // returns tiger , and removes it ,ie array gets shifted 
list.pop(); // returns last element , and removes it 
list.push("Elephant"); // returns the index to which its added, ie the last index
list.concat(["Bee", "Deer"]); // concats . IMP this creates a new list. Assign it to same or new var 
list.sort(); // sort
list.reverse();
list.splice(1,0);

// Search array methods in W3S
