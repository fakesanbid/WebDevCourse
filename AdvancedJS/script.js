// let and const
const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true;
    console.log(wizardLevel); // true
}
console.log(wizardLevel); //  false
// Let creates a scope within the curly braces

player = "sally"; // TypeError
// Const cannot be reassigned. Its mainly used to name functions
const a = function () {
    console.log("a");
}
// Exceptions :
const obj = {
    player: "ol",
    experience: 01,
    wizardLevel: false
}

obj = 5; // TypeError
obj.wizardLevel = True // CHANGE ACCEPTED 

// Destructuring : -----------------------------------------------------------------------------------------------------------------------------

// Now to grab values from objects :
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// ALT : 
const {
    player,
    experience
} = obj;
let {
    wizardLevel
} = obj;

// Dynamic Process : -----------------------------------------------------------------------------------------------------------------------------

const name = 'John Snow';
const obj = {
    [name]: 'hello',
    ['ray' + 'smith']: 'hihi',
    [1 + 2]: 'blah blah'
}
// OUTPUT :
// obj2
// {3: "blah blah", John Snow: "hello", raysmith: "hihi"}
// 3: "blah blah"
// John Snow: "hello"
// raysmith: "hihi"
// __proto__: Object

// Object properties :  -----------------------------------------------------------------------------------------------------------------------------

const a = "Simon";
const b = true;
const c = (); // EMPTY OBJECT

const obj = {
    a: a,
    b: b,
    c: c

};

// ALT :

const obj = {
    a,
    b,
    c
}

// Template Strings :-----------------------------------------------------------------------------------------------------------------------------

const name = "Joe";
const age = 90;
const greeting = "Hello" + name + "you seem" + greeting + "!";
const greetingText = `Hello ${name}. Yo what the fuck ${age-10}`; // Template String Use

// Default Arguments :-----------------------------------------------------------------------------------------------------------------------------

function greet(name = '', age = 30, pet = 'cat') {
    return `Hello ${name}. Yo ${pet} what the fuck ${age-10}`; // Template String Use
}

greet() // Hello . Yo cat what the fuck 20
greet(Sanbid, Cow, 79) // Hello Sanbid. Yo Cow what the fuck 69
//We can also call a function as window.q4()

// Symbol :-----------------------------------------------------------------------------------------------------------------------------

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

sym1 === sym2 // FALSE
// Useful because it creates completely unique type, done avoid conflict
// Used as an indentifier for object properties 

// Arrow Functions :-----------------------------------------------------------------------------------------------------------------------------

function add1(a, b) {
    return a + b;
}

// alt : 

const add2 = (a, b) => a + b;
add(4, 2);
add(4, 2); // Same O/P