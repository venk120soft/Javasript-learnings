FYI:
- console.log(true+1) //2
- console.log(false+1) //1

## What is the differene between null vs undefined in javascript?
null is an Object type and it holds value of nothing. undefined is special type called undefined.
by default if the variable  is not assigned to any value.

These are two special values. They’re special because there’s a lot of things you can’t do with them — they often cause errors. Usually, null represents that some value is missing intentionally, and undefined represents that a value is missing unintentionally. However, when to use either is left to the programmer. They exist because sometimes it’s better for an operation to fail than to proceed with a missing value.

```javascript
// In Practical
var test;
console.log(typeof test); // undefined
console.log(test.something) //Uncaught TypeError: Cannot read property 'something' of undefined

var test = null
console.log(typeof test); // null
console.log(test.something); //Uncaught TypeError: Cannot read property 'something' of null

console.log(null === null); // true
console.log(null == null); // true
console.log("null" === null); // false

console.log(undefined === undefined); // true
console.log(undefined == undefined); // true

console.log(null === undefined); // false
console.log(null == undefined); // true

console.log(!null); // true
console.log(!undefined); // true

// All numeric operations on the undefined will lead to the NaN
console.log(undefined + 1 ); // NaN

console.log(null == 0); // false
console.log(null + 1); // 1
console.log(null - 1); // -1
console.log(null - 200); // -200
console.log(null * 1); // 0
console.log(null * 100); // 0
console.log(null/20); //0
```
- null is not equal to 0 but while the mathematical operations are performed it will be treated as 0
- undefined does not have any value where as null has value which is null
## Why to set the variables to null?
There are some situations that we need to check for the null if the variable value is nothing
