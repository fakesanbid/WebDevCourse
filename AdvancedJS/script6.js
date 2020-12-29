// Type Coercion

1 == '1' // Type Coercion active, OP = true (not recommended)
1 === '1' // Type Coercion inactive, OP = false

if (1) {
    console.log(5); // Type Coercion changes 1 to true and 0 to false
}

// === and object.is is almost similar except few cases
-0 === +0 // True
Object.is(-0,+0) // False
NaN === NaN // False
Object.is(NaN, NaN) //True

// Extra Note

// = in JavaScript is used for assigning values to a variable.	
// == in JavaScript is used for comparing two variables, but it ignores the datatype of variable.	
// === is used for comparing two variables, but this operator also checks datatype and compares two values.