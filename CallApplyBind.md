## Using Call()
#### Note: If a function is not a method of a JavaScript object, it is a function of the global object
* We can pass the parameters to the call() method like parameters. Ex: testFunction.call(param1, p2, p3, p4)
* The call() method can be used on different objects.
* To use call() method on differnet objects we pass the first argument as scope of the ownership
* If the scope of the function points to same object then we can pass as this

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

person.fullName.call(person1);  // Will return "John Doe"
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
