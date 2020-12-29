var user = {
    name : "Sanbid",
    age : 69,
    isMarried : true,
    hobby : "Sex"
};

console.log(user.name); // Print in console the Accessed properties
user.age; // Access proprties
user.isMarried;
user.hobby;

// We can also add properties to an object
 user.wtf = true;
 console.log(user);

// Array isnt javascript type while Object is  ? Why ?
// Ans : Array is a type of object where properties are named 0,1,2 ....

// There can be array in a object 
var user = {
    name : "Sanbid",
    age : 69,
    isMarried : true,
    hobby : "Sex",
    animals : ["Tiger","Cat","Lion","Cow"] 
};
//Access "Cat"
user.animals[1];

//There can be object inside array 
var list = [
    {
        username : "lol",
        password : "wtf"
    },
    {
        username : "lol2",
        password : "wtf2"
    }
];
//access "lol2"
list[1].username;


// There can be functions inside objects
var user = {
    name : "Sanbid",
    age : 69,
    isMarried : true,
    hobby : "Sex",
    animals : ["Tiger","Cat","Lion","Cow"],
    shout : function() {
        console.log("Ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh !")
    } 
};
user.shout() // Calling the function , Keep a note of brackets 
// This is a method Function inside an object is called Method
console.log() // Its a method
//Type "console" in console to find all the different methods
// console.error("Bhag") throws an error in console  
list.push() // Its Also a method 


var user2 = {}; // Empty Object
var list2 = []; // Empty Array

//Null 
var user3 = null;
var list3 = null;

list3.name = "Andy" // IMPORTANT : WILL THROW ERROR | AS IT IS NULL
list2.name = "Andy" //  NO ERROR

// EXTRA : 

/* In the nutshell, Object in JavaScript is just key-value pairs stored in a Hash. The difference between property and method is that -- property is a value stored in the hash key, whereas method is a function stored in hash key.

var person = {
  name: "John Doe",
  sayHello: function() {
        console.log("hello");
  }
}
In this code sample.

name is the property of object person, it stored String "John Doe", you can access it via dot notation person.name.
sayHello is the method of object, and it is a function. You can also access it using dot notation person.sayHello(). Notice that sayHello is just a function, and function invocation requires you to use () here.*/