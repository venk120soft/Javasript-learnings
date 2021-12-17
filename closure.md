Worth Watching video of all times for closure: [Video by Techsith](https://www.youtube.com/watch?v=71AtaJpJHw0&t=1s)

# Closures
Inshort 1: Any function, that access variables outside of its scope is a closure

Inshort 2: A function inside a function creates a closure

Inshort 3: Closures are nothing but FUNCTIONS WITH PRESERVED DATA


Simple Example 1: With single function
```javascript
var passed = 3;

var addTo = function(){
  var  inner = 2;
  return inner + passed;
}
```
The above function addTo will create the closure. But How?

addTo function is trying to access the passed variable which is defined outside the function scope(which is in lexical scope). 
Behind the scenes when we call addTo function it will create the function scope with closure inside it preserving the data for variables which is not declared inside the function.

If we don't have varibles defined in function scope but trying to read the variable then it will look into the parent scope and up until it founds the value of it.
If it's not defined anywhere, then the variable will be treated as undefined

![Simple Example 1:](./images/closure-example1.png)

Simple Example 2: Function inside a function 
```javascript
var addTo = function(passed){

    var  add = function(inner){
      return inner + passed; // reading the value of passed from lexical scope
    }

    return add;     
}
```
![Simple Example 2:](./images/closure-example2.png)

![Simple Example 3:](./images/closure-example3.png)
