### Tricky Questions on JS:

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
