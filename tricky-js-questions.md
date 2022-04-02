## Tricky Questions on JS:
## Basic Javascript methods we can use to solve any problem
```javascript
	Math.PI
	Number.MIN_VALUE
	Number.MAX_VALUE
	Math.max(1,3,4,2)
	Math.floor(2.99) = 2 // min integer number
	Math.ceil(2.05) = 3 // max integer number
	(123.234566).toFixed(1) // no string only number can be calculated to the toFixed
	parseInt(123.234)
	parseInt('123.234')
	paraseFloat('123.234')
	'123.234'*1=123.234

	const hello = 'Hello, World!';
	hello[0] = 'L'; // This has no effect, because strings are immutable
	hello[0]; // This returns "H"

	'myString'.charCodeAt(0)=104 // Ascii value
	'myString'.concat('test') ='myStringtest';
	'myString'.split('')= ['m', 'y', 'S', 't', 'r', 'i', 'n', 'g']
	'myString'.indexOf('String') =2 // case sensitive
	"myString".includes('tri') =true // case sensitive
	'myString'.length=8
	'myString'.replace('S','hello') = 'myhellotring'

	Array.from('myString')
	Array.isArray([1,2,3]);
	[...'myString']
	[...'myString'].includes('St')=true;
	[1,4,5,3,2,4,7].sort((x,y)=>x-y) ; //[1, 2, 3, 4, 4, 5, 7]
	[1,2,3,4,5].slice(1) === [2, 3, 4, 5]; 
	// Swap element a value to b and b value to a
	[a, b] = [b, a]
	
	// Dictionary or Object
	var dict = {
	name:'Eric'
	}
	dict['age']=23; // add/update new key,value pair
	dict.age=30; // add/update value for the key
	dict.age // for accessing
	delete dict.age // for deleting
	dict.hasOwnProperty('name'); // checking for the key is defined in object		
```
### Usage of const let var KP interview
```javascript
function getAge(age){
	var status = 'adult'
	if(age>18){
		console.log(status);	
	}else{
		console.log('not'+status);
	}
}
getAge(23); // adult

function getAge(age){
	const status = 'adult'
	if( age > 18 ){
		console.log(status);
	}else{
		console.log('not'+status);
	}
}
getAge(13); // not adult

function getAge(age){
	if(age>18){
		const status;
		status= "adult"
		console.log(status);
	}else{
		console.log('not'+status);
	}
}
getAge(23); // o/p compile error
getAge(12) // o/p: compile error
// Reason: due to hoisiting it always looks for the variable are declared properly and bring on top of the scope of where it should exist based on the type of it
// const variables must be assigned to some value

const names1= ["Ramesh", "Suresh", "Rajesh", "Jon", "Suresh"]
const names2= []
for(const name of names2){
	if(names2.some((name2)=>name2===name)){
		continue;
	}
	names2.push(name)
}
console.log(names2) o/p: []

// Littile different with names1
for(const name of names1){
	if(names2.some((name2)=>name2===name)){
		continue;
	}
	names2.push(name)
}
console.log(names2) o/p: ["Ramesh", "Suresh", "Rajesh", "Jon"]
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
```javascript
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

## EPAM 1st round of Interview on 29th Dec 2021
Explain how Javascript runs code, event loop, task, micro task.
```javascript
const a = new Promise(resolve => {
  console.log('a');
  resolve('b')
})
setTimeout(() => console.log('c'), 0)
a.then(b => console.log(b));
const d = () => console.log('d');
// driver code
d();

O/p:
// 1 - a 
// 2 - d
// 3 - b
// 4 - c
```
## EPAM 2nd round of Interview on 11th Jan 2022
```javascript
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
	var a = 1;
	console.log(a);
})(2); // o/p would be 1

(function a(a){
	var a = 1;
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
 
console.log(user.admin); // false 
// reason: It will create the new prototype object hence the initial value which points to the original User object creation will be printed
// after the new object created prototype has changed but `user` is still pointing to the old User prototype

console.log(user.prototype);// undefined

user.prototype = {admin:true};
console.log(user.admin)//false;
console.log(user.prototype.admin);// true
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
```
## Door Dash First Round Code for Carousal (Image slider)

```Javascript
// https://codesandbox.io/s/react-reddit-slideshow-forked-02wnqi?file=/src/index.js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// NOTE: Modified By Venkatesh Chunchu for Better Code readability after the Interview
/** Improvements needed for production ready
 *  1. Add unit and functional test cases
 *  2. Modularize code base
 *  3. Style changes needs to be added as per the UX
 *  4. We can make it typesafe
 *  */

/**
 * Get cute dog pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */
const getDogs = async (length = 10) => {
  return fetch(`https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json`)
    .then((response) => response.json())
    .then((response) => {
      const dogs = [];
      response.data.children.forEach((c) => {
        const title = c.data.title;
        const url = c.data.preview?.images[0]?.resolutions[2]?.url;
        if (url) {
          dogs.push({ title: title, url: url.replaceAll("&amp;", "&") });
        }
      });
      return dogs.slice(0, length); // remove the extra dogs
    });
};

// We can read it from the configuration file
const noOfImages = 10;

const previousItemIndex = (activeItem) => {
  if (!activeItem || !activeItem.hasOwnProperty("id")) {
    return 0;
  }
  const index = activeItem.id;
  // Circle back to last index in case if we reach first item else setting it to previos index
  return index === 0 ? noOfImages - 1 : index - 1;
};

const nextItemIndex = (activeItem) => {
  if (!activeItem || !activeItem.hasOwnProperty("id")) {
    return 0;
  }
  const index = activeItem.id;
  // Setting back to first index in case of last item else setting it to next
  return index === noOfImages - 1 ? 0 : index + 1;
};

const App = () => {
  return (
    <>
      {/* Add any other components if required */}
      <DogsComponent />
    </>
  );
};

const DogsComponent = () => {
  const [dogs, setDogs] = useState([]);
  const [activeDog, setActiveDog] = useState({
    title: "",
    url: "",
    id: 0
  });
  const previousDog = () => {
    const dogId = previousItemIndex(activeDog);
    const dogObj = dogs[dogId];
    setActiveDog({
      ...dogObj,
      id: dogId
    });
  };
  const nextDog = () => {
    const dogId = nextItemIndex(activeDog);
    const dogObj = dogs[dogId];
    setActiveDog({
      ...dogObj,
      id: dogId
    });
  };

  useEffect(() => {
    (async () => {
      const dogsList = await getDogs(noOfImages);
      setDogs(dogsList);
      setActiveDog({ ...dogsList[0], id: 0 });
    })();
  }, []);

  return (
    <>
      <ImageComponent image={activeDog} />
      <ButtonComponent title="Back" onClick={previousDog} />
      &nbsp; &nbsp;
      <ButtonComponent title="Next" onClick={nextDog} />
    </>
  );
};

const ImageComponent = ({ image }) => {
  return (
    <>
      <img src={image.url} title={image.title} alt={image.title} />
      <p>{image.title}</p>
    </>
  );
};

const ButtonComponent = ({ title, onClick }) => {
  return (
    <button title={title} alt={title} onClick={onClick}>
      {title}
    </button>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

```
