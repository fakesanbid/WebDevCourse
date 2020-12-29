// Advanced Loops


// for of
// iterating
// We can iterate over iterables likes arrays, strings
const backet = ['apple', 'orange', 'grapes'];
for (item of backet){
    console.log(item);
}

// for in
// Enumerating, properties in objects are enumerable 
const detailedBasket = {
    apple: 5;
    orange: 10,
    grapes: 1000
};
for (item in detailedBasket) {
    console.log(item) // OP - apple , orange, grapes (ie only properties)
}

// We cannot use 'for of' for objects but we can (somewhat) use 'for in' for arrays
// Reason :  arrays are objects . Basket array can be written as
// basket = {0:apple,1:oranges,2:grapes}
// OP will be 0 1 2