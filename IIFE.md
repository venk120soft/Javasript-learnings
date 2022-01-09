Resources : 
- [msdn](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
- [Closure, curring, IIFE](https://dev.to/ritik_dev_js/what-the-hack-is-closure-currying-and-iife-in-javascript-32m9)

# IIFE (Immediately Invoked Function Expression)
An IIFE is a JavaScript function that runs as soon as it is defined.
It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts: 
- The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
- The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
```
(function(){
    console.log("Its an IIFE");
    // Add private and public properties and other logic
})();
//Its an IIFE
```
## Use cases
- Avoid polluting the global namespace
- IIFE will be executed as soon as it's intitialized
- IIFE have it's own scope defined, so we can create private variables and methods
 
 ## When to use IIFE
 If we have some initiation code that we don't need to use again, we could use the IIFE pattern. 
 As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.
 
 Before ES6 to track the 
 ```
 var arr = [1,2, 3, 4];
 for(var i=0; i<arr.length; i++){
   setTimeout(function(){
    console.log(`Value at index: ${i} is:  ${arr[i]}`);
   }, 3000);
 }
 o/p: Value at index: 4 is: undefined
 Value at index: 4 is: undefined
 Value at index: 4 is: undefined
 Value at index: 4 is: undefined
 ```
 To properly track down the i value we use IIFE, so that it has it's own scope
 ```
  var arr = [1,2, 3, 4];
 for(var i=0; i<arr.length; i++){
   (function(index){
      setTimeout(function(){
      console.log(`Value at index: ${index} is:  {arr[index]}`);
                 }, 3000);
   })(i);
 };
 o/p: Value at index: 0 is:  1
      Value at index: 1 is:  2
      Value at index: 2 is:  3
      Value at index: 3 is:  4
 ```
 So, Basically IIFE it's creating the closure with it's own private scope
 
 Same logic, From ES6 we can be re written using let keyword
 ```
 var arr = [1,2, 3, 4];
 for(let index = 0; index<arr.length; index++){ // Just changed from var to let
   setTimeout(function(){
    console.log(`Value at index: ${index} is:  {arr[index]}`);
   }, 3000);
 }
 
 o/p: Value at index: 0 is:  1
      Value at index: 1 is:  2
      Value at index: 2 is:  3
      Value at index: 3 is:  4
```
