https://www.freecodecamp.org/news/copying-stuff-in-javascript-how-to-differentiate-between-deep-and-shallow-copies-b6d8c1ef09cd/

## Deep Copy: 
A deep copy means that all of the values of the new variable are copied and disconnected from the original variable.
A deep copy will duplicate every object it encounters. The copy and the original object will not share anything, so it will be a copy of the original.

## Shallow Copy: 
A shallow copy means that certain (sub-)values are still connected to the original variable.
when we do shallow copy it still points to the original reference. if you make some change to the copy it also applies to the original.

Deep Copy can be done for the primpitive data types
```
const a = 5
let b = a // this is the copy
b = 6
console.log(b) // 6
console.log(a) // 5

// For the objects shallow copy can be done for the composite types like arrays and objects
const a = {
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
  pt: 'Olà'
}
let b = a
b.pt = 'Oi'
console.log(b.pt) // Oi
console.log(a.pt) // Oi
```
In the example above, we actually made a shallow copy. 
This is often times problematic, since we expect the old variable to have the original values, not the changed ones

we can use Object.assign to do deep copy
```
const a = {
  en: 'Bye',
  de: 'Tschüss'
}
let b = Object.assign({}, a)
b.de = 'Ciao'
console.log(b.de) // Ciao
console.log(a.de) // Tschüss

// In ES2015, spread operator(...) helps to copy all values in to new object for deep copy
const a = {
  en: 'Bye',
  de: 'Tschüss'
}
let b = {...a}
b.de = 'Ciao'
console.log(b.de) // Ciao
console.log(a.de) // Tschüss
```
But when dealing with nested objects making using of this way gives us shall copy.
```
const a = {
  foods: {
    dinner: 'Pasta'
  }
}
let b = {...a}
b.foods.dinner = 'Soup' // changes for both objects
console.log(b.foods.dinner) // Soup
console.log(a.foods.dinner) // Soup

To make deep copy we can follow this:

const a = {
  foods: {
    dinner: 'Pasta'
  }
}
let b = {foods: {...a.foods}}
b.foods.dinner = 'Soup'
console.log(b.foods.dinner) // Soup
```
let's say if we have more keys having
In case you were wondering what to do when the object has more keys than only foods , you can use the full potential of the spread operator. 
When passing more properties after the ...spread , they overwrite the original values, 
for example 
```
const b = {...a, foods: {...a.foods}, fruites: {...a.fruites}} .
console.log(a.foods.dinner) // Pasta
```
Making deep copies without thinking for arrays and composite types
What if you don’t know how deep the nested structures are? It can be very tedious to manually go through big objects and copy every nested object by hand. 
There is a way to copy everything without thinking. You simply stringify your object and parse it right after:
```
const a = {
  foods: {
    dinner: 'Pasta'
  }
}
let b = JSON.parse(JSON.stringify(a))
b.foods.dinner = 'Soup'
console.log(b.foods.dinner) // Soup
console.log(a.foods.dinner) // Pasta
```
Here, you have to consider that you will not be able to copy custom class instances, 
so you can only use it when you copy objects with native JavaScript values inside.

Copying instance of custom classes
```
class Counter {
  constructor() {
     this.count = 5
  }
  copy() {
    const copy = new Counter()
    copy.count = this.count
    return copy
  }
}
const originalCounter = new Counter()
const copiedCounter = originalCounter.copy()
console.log(originalCounter.count) // 5
console.log(copiedCounter.count) // 5
copiedCounter.count = 7
console.log(originalCounter.count) // 5
console.log(copiedCounter.count) // 7
```
