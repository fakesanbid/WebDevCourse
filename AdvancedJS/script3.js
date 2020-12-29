const array = [1, 2, 3, 4];
// Multiply each number in array 
const double = [];
const newarray = array.forEach((num) => {
    double.push(num * 2);
});
console.log(newarray); // OP - UNDEFINED, cause we havent changed it
console.log('forEach',double); // OP - {2, 4, 20, 32}

// DOUBT :
const array = [1, 2, 3, 4];
let newarray = [];
array.forEach((num) => {
   newarray.push(num * 2);
});
console.log(newarray); // [2, 4, 6, 8]

const array = [1, 2, 3, 4];
let newarray = [];
newarray = array.forEach((num) => {
   newarray.push(num * 2);
});
console.log(newarray); // Undefined

// Reason :
// .forEach() returns undefined
// So when you reassignednewArray = array.forEach... You set newArray to the value of undefined.

//--------------------------------------------------------------------------------------------------------

// MAP : 

const array = [1, 2, 3, 4];
const mapArray = array.map((num) => {
    return num*2;
});
console.log('map',mapArray);  // OP - {2, 4, 6, 8}
// Map vs forEach : ForEach can be just used for iteration without 
// expecting a return . But map need a return , it needs to store result of each
// invocation of the operation into another collection (here mapArray). 
// forEach there are can be loads of side effects. But no side effects (theoretcially)
// in map. If we dont specify 'return' in map, it gives undefined. Main array isnt changed in map

// The above code can be refactored as : 
const mapArray = array.map(num => num*2);
// Reson : single parameter and single return

//--------------------------------------------------------------------------------------------------------

// Filter :

const array = [1, 2, 13, 24];
const filterArray = array.filter((num) => {
    return num > 5;
});
console.log(filterArray); // OP - 13, 24 , only those elements above 5
// Refactor :
const filterArray = array.filter(num => num > 5); 

//--------------------------------------------------------------------------------------------------------

// Reduce :

const array = [1, 2, 13, 24];
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num ;
}, 0); // 0 is the accumulator value
// 'Accumulator' be named anything eg acc, blah etc
// Here OP is 1+2+13+24
// If I change acc value to 5, OP becomes : 5+1+2+13+24