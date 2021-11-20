FYI:
console.log(true+1) //2
console.log(false+1) //1

## What is the differene between null vs undefined in javascript?
null is an Object type and it holds value of nothing. undefined is special type called undefined.
by default if the variable  is not assigned to any value.
These are two special values. They’re special because there’s a lot of things you can’t do with them — they often cause errors. Usually, null represents that some value is missing intentionally,

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

console.log(undefined === undefined); // true
console.log(undefined == undefined); // true

console.log(null === undefined); // false
console.log(null == undefined); // true

console.log(!null); // true
console.log(!undefined); // true

// All numeric operations on the unbdefined will lead to the NaN
console.log(undefined + 1 ); // NaN

console.log(null + 1); // 1
console.log(null - 1); // -1
console.log(null - 200); // -200
console.log(null * 1); // 0
console.log(null * 100); // 0
console.log(null/20); //0
```
## Why to set the variables to null?
There are some situations that we need to check for the null if the variable value is nothing
