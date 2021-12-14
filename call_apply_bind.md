## Using call() Method
#### Note: If a function is not a method of a JavaScript object, it is a function of the global object
* We can pass the parameters individually to the call() method Ex: testFunction.call(param1, p2, p3, p4)
* To use call() method on differnet objects we must pass the first argument as scope of that object
* If the scope of the object points to current object then we can pass as this

* The call() allows for a function/method belonging to one object to be assigned and called for a different object
* With call(), we can write a method once and then inherit it in another object, without having to rewrite the method for the new object.

```javascript
// Call constructor of superclass to initialize superclass-derived members.
Syntax: yourObject.call(superClassObject, prop1,prop2,...)
Ex: 
testFunc.call(); // this is same as testFunc();
testFunc.call(this); // pointing to the parent scope
testFunc.call(this, p1,p2); // same object scope
testFunc.call(person1, p1,p2); // different object scope
testFunc.call(person2, p1,p2); // different object scope
```
[more info](https://www.w3schools.com/js/js_function_call.asp)

### Passing without params
```javascript
function show() {
   console.log('Show function');
}

show();
show.call();
show.call(this);
```
### Passing Parameters
While Passing the parameters we must pass the scope of the object(here it is "this" )
```javascript
function show(name) {
   console.log('Show function '+ name);
}

show("Test"); // Show function Test
show.call("Test"); // Show function undefined
show.call(this,"Test"); // Show function Test
```
### Passing same object scope(this)
```javascript
let greeting = 'Hi';

let messenger = {
    greeting: 'Hello';
}

function say(name) {
    console.log(this.greeting + ' ' + name);
}

say.call(this, "Venkatesh");
```

### Passing different object scope
```javascript
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// Inheriting the props of person1 into person
person.fullName.call(person1);  // Will return "John Doe"

// Inherting the props of person2 into person
person.fullName.call(person2);  // Will return "Mary Dow"
```
### Passing with arguments
```javscript
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway"); // will return  John Doe,Oslo,Norway
```

# Using apply() Method
The difference between the call() and apply() method is passing the way of parameters

* apply() allows to pass the parameters like an array.
* This method is helpfull to extend functionalities to the existing one ex: arrays

arrays does not have the functionality to get the max element we can extend that by calling apply on that.
```javascript
// For all below we get output as 3
Math.max.apply(5,[1,2,3]);
Math.max.apply(' ',[1,2,3]);
Math.max.apply(this,[1,2,3]);
Math.max.apply(null,[1,2,3]);
Math.max.apply(undefined,[1,2,3]);
Math.max.apply("test",[1,2,3]);

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}

var person2 = {
  firstName:"Ram",
  lastName: "Sethu"
}
// using apply()
person.fullName.apply(person1, ["Oslo", "Norway"]); // "John Doe,Oslo,Norway"
person.fullName.apply(person2, ["Oslo", "Norway"]); // "Ram Sethu,Oslo,Norway"

// using call()
person.fullName.call(person1, "Oslo", "Norway"); // "John Doe,Oslo,Norway"
person.fullName.call(person2, ["Oslo", "Norway"]); // "Ram Sethu,Oslo,Norway"
```
# Using bind() Method
bind() method will return the new function. This keyword will set to the provided value with a given sequence of arguments preceding any provided when the new function is called.

```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

```
