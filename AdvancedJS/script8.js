// ES 10 -------------------------------------------------------------------------------------------------------------------------

// flat() method
const array = [1, 2, [3, 4]];
array.flat(); // OP - [1, 2, 3, 4] 
// Removes nested arrays
const array2 = [1, 2,[3,4,[5]]];
array2.flat(); // OP - [1,2,3,4,[5]]
// We see by default just one level is flattened
// To flatten 2 levels : array2.flat(2)
// To flatten deeply nested stuff guess a large number, ex flat(50)
// In Excercise we have a better method
const entries = ['bob', 'sally',,,,,,,,'cindy']
entries.flat(); // OP - ['bob', 'sally', 'cindy']
// Used in data cleanup


// flatMap() , flat with map function !
const lolol = [['q','w'],'e','r',['t','y'],[[[['i']]],'o'],['p','l']];
const lolol2 = lolol.flatMap(creature => creature + 'Trex')
// OP - ["q,wTrex", "eTrex", "rTrex", "t,yTrex", "i,oTrex", "p,lTrex"]


// trimstart, trimend
useremail1 = '         lol@lolmail.com';
useremail2 = 'lol@lolmail.com         ';
console.log(useremial1.trimStart()); //lol@lolmail.com
console.log(useremail2.trimEnd());//lol@lolmail.com


// fromEntries, object from arrays
userProfile = [['Sam',23],['Derek',40],['LOl',69]];
Object.fromEntries(userProfile)
// OP - {Sam: 23, Derek: 40, LOl: 69}
// Its the opposite of Object.entries which converts objects to array discussed in ES8


// try catch
try {
// code
}catch {
// code if code in try block isnt working
}
// Example
try{
    true + 'hi';
}catch{
    console.log('Catch active');
} // OP - truehi (due to type coercion)
// Example 2
try{
    bob + 'hi';
}catch{
    console.log('Catch active');
} // OP - Catch active (due to undefined 'bob')
// Before ES10 update : 
try{
    bob + 'hi';
}catch (error){ //We can pass whatever tf we want- err , e etc 
    console.log('Catch active due to : ', error);
} // OP - Catch active due to : reference error .... 
