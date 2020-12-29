function first(){
    var greet = 'Hi';
    function second(){
        alert(greet);
    }
    return second;
}

var newFunc = first();
newFunc();

// Refactoring it with the latest trend : 

const first = () => {
    const greet = 'Hi';
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Closure : a function ran , it is never going run again. But its 
// going to remember that there are references to the variables
// So the child scope always has access to parent scope, BUT NOT VICE VERSA

//--------------------------------------------------------------------------------------------------------

// Currying

const multiply = (a,b) => a * b;
//Applying Currying - accepting one parameter at a time
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3); // returns b function, that is : b = a * b
curriedMultiply(3)(4); // returns 12
// Why Currying  ? . Because it is makes the function more extensible
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(10); // OP = 50

//--------------------------------------------------------------------------------------------------------

// Compose 

const compose = (f,g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5); // OP = 7

//--------------------------------------------------------------------------------------------------------

// Avoiding Side Effects and functional purity

var a = 1;
function(){
    a = 2; // Side effect. We are changing value that effect outside universe
    console.log(a);
}
// Avoiding This makes a function 'Deterministic'. We know exactly what a deterministic function
// does no matter how much we play them