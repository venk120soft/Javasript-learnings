## Tricky Questions on JS:
### Usage of const let var
```javascript
// TODO:This needs an updata
var status= 'Loading';
function(age){
	var status = 'loading'
	if(age>18){
		console.log(status);	
	}else{
		console.log('not'+status);
	}
}
age(23);

var status= 'Loading';
function(age){
	cons status = 'loading'
	if(age>18){
		console.log(status);	
	}else{
		console.log('not'+status);
	}
}
age(23);


var status= 'Loading';
function(age){
	var status = 'loading'
	if(age>18){
		console.log(status);	
	}else{
		console.log('not'+status);
	}
}
age(23);
```
```javascript
JSON.stringify(null) // "null"
JSON.stringify(undefined) // undefined 

// Q1
if(function y(){})
{
  console.log( true);
}else {
  console.log(false);
}

// This will return true

// Q2 which relates value types and reference type
function turnOn(machine) {
    machine={isOn : true}; // assgining complete object i.e treating like value type
    
}

var computer = {
    isOn: false
};

turnOn(computer);
console.log(computer.isOn); // false;

function turnOn(machine) {
    machine.isOn = true; // modifying or updating the property of object i.e treating like reference type
}

var computer = {
    isOn: false
};

turnOn(computer);
console.log(computer.isOn); // true;

// Q3
console.log(true+1);
console.log(true+'10');
console.log(15 - false); //15
console.log('10' - false); //10
console.log('12' * false); // 0
console.log(12 * false); // 0

console.log('12u' * false); // NaN
console.log('12u' * 5); // NaN
console.log('12u' + 5); // NaN
console.log(12 + undefined); // NaN
console.log(12 * undefined); // NaN
console.log('12u' * null); // NaN

console.log(12 + null); // 12
console.log(12 * null); // 0
console.log('12' * null); // 0

false == ""  // true
false == []  // true
false == {}  // false
"" == 0      // true
"" == []     // true
"" == {}     // false
0 == []      // true
0 == {}      // false
0 == null    // false  reason it's a primitive value even though it's type is object (it's a bug in javascript null type should not be object)
```
Normal functions vs arrow functions
```
var a= {
  name:'Hello',
  say(){
  // This will point to current object
  console.log(this);}
}

var b= {
  name:'Hello',
  say(){ 
      return function(){
          // here this is poiniting to the global window object
          console.log(this);
      };}
 }

var c= {
  name:'Hello',
  say(){ return () => 
  // this will points to it's parent scope(in this case current object)
  console.log(this);}
}

a.say() // o/p {name: 'Hello', say: ƒ}

b.say()() // O/p:  window object

c.say()() // o/p {name: 'Hello', say: ƒ}
```
High priority forPromises  then web api's after synchronous operations are completely done

## EPAM 2nd round of Interview on 11th Jan 2022
```
// Basic functionality of  types and operators functionality
void(0) // undefined
var a = 1 && 2 && 3 && 4;
var b = 1 || 2 || 3 || 4;
var c = 0 || null || 1 || 2;
var d = null && 0 && void(0);
<a href="javascript: void(0)" />
----------------------------------------
// Hoisting Question:
(function a(a){
	function a(){};
	var a =1;
	console.log(a);
})(2); // o/p would be 1

(function a(a){
	var a =1;
	function a(){};
	console.log(a);
})(2); // o/p would be 1
----------------------------------------
// Bind call apply question
let q = {}; // some context
function f() {} // function we need to execute
 
let a = f.bind(q); // this will return the function
let b = f.call(q); // this will execute function and return the value. it accepts individual params
let c = f.apply(q); // this will execute function and return the value. it accepts list of params
----------------------------------------
// function vs arrow question
let a = function() {}
let b = () => {};
 
var c = new a();
var d = new b(); // we don't have constructor for arrow functions so we can't do this
----------------------------------------
// spread operator question
var a = [5,4,3,2,1];
var b = {...a}; // { 0:5, 1:4, 2:3 }
var c = [...b]; // b is not iterable hence we can't do this. instead we can use [...b.Values()]
----------------------------------------
// Prototype question
function User() {}
User.prototype = {admin: false};
 
let user = new User();
User.prototype = {admin: true};
 
alert(user.admin); // false 
// reason: It will create the new prototype object hence the initial value which points to the original User object creation will be printed
// after the new object created prototype has changed but `user` is still pointing to the old User prototype
----------------------------------------
// Fun question
console.log([0,1][0,1]);// O/p:  1 ; reason all the elements before comma(,) will not be treated as an index
[0,1][0,1] === [1,0][1,0] // true
//compiled as 
[0,1][0,1]===[0,1][1] ===1 and [1,0][1,0]===[1,0][0]===1

var q = [0,1];

console.log(q[1]); //1
q[1] === q[0,0,0,0,0,0,0,0,1] // true
----------------------------------------
// JS flow test
setTimeout(()=>console.log(1));
Promise.resolve().then(()=>console.log(2));
console.log(3);
console.log(4);
// O/p: 3 4 2 1
----------------------------------------
// Promise chaining
Promise.resolve(1)
.then((a)=>console.log(a)) // 1
.then((b)=>console.log(b)) // undefined // reason we are getting the console.log(a) as b value it means void opearion
.then((c)=>console.log(c)) // undefined
.catch(()=> throw new Error('1')) // it won't come down
.then((d)=>console.log(d))
----------------------------------------
