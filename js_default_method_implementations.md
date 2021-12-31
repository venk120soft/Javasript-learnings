# Javascript Default Methods Polyfill

## What is polyfill?
Polyfill is sort browser fallback. any javascript functionalities that is not supported by the browser will fall into polyfill . i.e newly added functionalities by Javascript such as ES5/6 features

In polyfill we write our own implementaion of javascript functions

### Polyfill for Bind method
Actual Bind functionality of Javascript Bind method
Scenario 1:
```
const myObj= {
  firstName:'Venkatesh',
  lastName:'Ch'
};
let printName = function(){
  return this.firstName + ' '+ this.lastName;
}

let getDetails = printName.bind(myObj); // bind will return function
// calling the function returned from bind
getDetails(); // This will o/p Venkatesh Ch
```
Scenario 2:  Extending the function with single params and call the bind function on it
```
printName = function(location){
  return this.firstName + ' '+ this.lastName + ', '+ location;
}
getDetails = printName.bind(myObj, 'Hyderabad');
getDetails(); // this will o/p Venkatesh Ch, Hyderabad
```
Scenario 3: Extending the function with multiple params and call the bind function on it
```
printName = function(location, country){
  return this.firstName + ' '+ this.lastName + ', '+ location+ ', '+ country;
}
getDetails = printName.bind(myObj, 'Hyderabad', 'India');
getDetails(); // this will o/p Venkatesh Ch, Hyderabad, India
```
scenario 4: Extending the function returned from bind with single param
```
printName = function(location, country){
  return this.firstName + ' '+ this.lastName + ', '+ location+ ', '+ country;
}
getDetails = printName.bind(myObj, 'Hyderabad', 'India');
getDetails('KPHB'); // this will o/p Venkatesh Ch, Hyderabad, India, KPHB
```
scenario 5: Extending the function returned from bind with single param
```
printName = function(location, country){
  return this.firstName + ' '+ this.lastName + ', '+ location+ ', '+ country;
}
getDetails = printName.bind(myObj, 'Hyderabad', 'India');
getDetails('KPHB', '98007'); // this will o/p Venkatesh Ch, Hyderabad, India, KPHB
```
## Solution:

```
  Function.prototype.mybind= function (...args){
      let obj= this;
      let param = args.slice(1); // Removing the first element from the provided args to the function (as we are pointing the first argument to the **this**)
      return function(...args2){
          obj.apply(args[0], [...param, ...args2]);
      }
  }
  
  let printName = function (hometown, state, country) {
          console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
  }

  let printMyName = printName.bind(name, "Dehradun", "Uttarakhand");
  printMyName( "India");
  let printMyName2 = printName.mybind(myObj, "Venkatesh", "Hyderabad");
  printMyName2( "India"); // o/p: Venkatesh Hyderabad, India
```
