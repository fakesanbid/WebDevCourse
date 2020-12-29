// Pass by Value and Pass by Reference 

// Primitive Types are pass by value
var a = 5;
var b = a;
b++
console.log(a); // 5
console.log(b); // 6

// Objects are pass by reference
let obj1 = {name: 'a', password: '123'};
let obj2 = obj1;
obj2.password = 'lol';
console.log(obj1); // OP - {name: 'a', password: 'lol'};
console.log(obj2); // OP - {name: 'a', password: 'lol'};

// Arrays are objects . So it will also be pass by reference
var c = [1, 2, 3, 4, 5];
var d = c;
d.push(12345);
console.log(c); // OP - 1,2,3,4,5,12345

// Cloning Array
var d = [].concat(c); // [] - Empty array
// Cloning Objects
let obj3 = Object.assign({}, obj); // {} - Empty Object
// Cloning Object ALT 
let obj4 = {...obj};

// Object inside an Object 
let obj = {
    a:'a',
    b:'b',
    c: {
        deep : 'learning'
    }
};
let clone1 = {...obj};
let clone2 = {...obj};
obj.c.deep = 'haha';
console.log(obj); // {a:'a',b:'b',c: {deep : 'haha'}}
console.log(clone); // {a:'a',b:'b',c: {deep : 'haha'}}
console.log(clone2); // {a:'a',b:'b',c: {deep : 'haha'}}
// Here we clone first then modify. But still clones get affected
// This is because only first level is clones. "C", which is object
// is still passed by reference . So the clone is SHALLOW CLONE

// Deep Cloning
let superCLone = JSON.parse(JSON.stringify(obj));
// Disadvantage - may take Loooong time to deepclone very deep objects
