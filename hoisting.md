Resources:  [Text](https://yvishal.hashnode.dev/hoisting-in-javascript)
# Hoisting

Hoisting is JavaScript's default behavior of moving declarations to the top of the scope.
Javascript only hoists the declarations and not their initialization or assignments.

Definition:
****Hoisting is phenomenon in javascript where bringing up all the variables’ declaration at the top of the functional/global block is called variable hoisting. This allows us to use the variable before declaring it. There are some variables that get hoisted completely and some that get hoisted with a temporal dead zone.****

There are 3 Different Scopes
- Global Scope
- Function Scope
- Block Scope


***Variable Hoisting :*** all the variables’ declaration at the top of the functional/global block is called variable hoisting.

```javascript
   var a; // declaration
   var b=3; // definition

   console.log('a is:', a); // undefined
   console.log('b is:', b); // 3

   a=23;// Intitalization
   console.log('a is:', a); // 23
 ```
***Function Hoisting :*** To Understand the function hoisting we have to see 2 scenarions
1. Function Declaration:
```javascript
callMe();
function callMe(){
  alert('hello from call me');
};

// Below is how JavaScript reads the above code:
function callMe(){
  alert('hello from call me');
};

callMe();
```
2. Create Variables for a Function: Again this acts like Variable Hoiting
```javascript
callMe(); // Throws an Error
var callMe = function() {
  alert('hello from callMe');
}

// Reason for throwing an error. Below is how it converts
var callMe; // definition
callMe(); // By this time compiler doesn't no that is a function
var callMe = function() {
  alert('hello from callMe');
}
```
***Temporal DeadZone :*** That phase from hoisting to till assigned the value is known as Temporal dead zone

From ES6 Javascript introduce new variable types called const and let. These variable gets hoisted but JavaScript puts them into Temporal Dead Zone until those variables get assigned. 

```javascript
console.log(a);
let a=10;
```
Here output shows the reference error due to temporal dead zone because whenever you trying to access variable inside a temporal dead zone it gives a reference error.

If you try to use any let or const variable before declaring, you will land up with an error that reads is not defined.

## Public, Private, Privileged members

```javascript
function myFunction(value) {
	// public member
	this.name = value;
	// private member
	var age= 23;
	// private method
	function fullNameWithAge(){
		return this.name + '; age is:'+ age;
	}
	// privileged member which will have an access to private members of a function
	this.getAge = function(){
		return age;
	}
}

const obj= new myFunction("Venkatesh");
obj;//{name:'Venkatesh', getAge:fn()}
```
- public methods are accessible outside the class
- private members are not accessible outside of the function.
- privileged members give an access to private members
- A privileged method is able to access the private variables and methods, and is itself accessible to the public methods and the outside
[learn more](http://crockford.com/javascript/private.html)

This is possible in javascript due to the closure concept in JS


