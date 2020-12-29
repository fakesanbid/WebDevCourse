// ES7-------------------------------------------------------------------------------------------------------------------------

// Includes Method
'Hello'.includes('o'); // OP - true
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog'); // OP - true
pets.includes('cow'); // OP - false 

// Exponential operator
const square = (x) => x ** 2; // x^2
const cube = (x) => x ** 3; // x^3



//ES8-------------------------------------------------------------------------------------------------------------------------



// String Padding
'Turtle'.padStart(10); // OP - '      Turtle' [ie 10 total spaces including the word]
// Since turtle is of 6 letters, no of spaces will be 10-6 = 4
'Turtle'.padEnd(10); // OP - 'Turtle    ' 



// Trailing commas in functions parameters lists and calls
const fun = (a,
             b,
             c,
             d,
               ) => {
    console.log(a);
}
fun(1, 2, 3, 4);
// The extra comma now wont give any error . This makes it easier 
// To add new parameters. In case of large list of parameters its
// better to aligh parameters like the above as after commiting chnages 
// to github its easier to visualise



// Values and Entries 
// Before object.values and object.entiries we had object.keys
let obj = {
    username0: 'santa',
    username1: 'rudolf',
    username2: 'Mr Lol'
}
// Using keys we can iterate over objects like arrays
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
}) 
// OP - username0 santa
//      username1 rudolf
//      username2 Mr Lol
// But by using Values and Entries things get easier
Object.values(obj).forEach(value => {
    console.log(value);
})
// OP -  santa
//       rudolf
//       Mr Lol 
Object.entries(obj).forEach(value => {
    console.log(value);
})
// OP - [username0, santa]
//      [username1, rudolf]
//      [username2, Mr Lol]
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
// OP - [santa0, rudolf1, Mr lol2]
