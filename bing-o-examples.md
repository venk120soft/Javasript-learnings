[Resources](https://www.freecodecamp.org/news/my-first-foray-into-technology-c5b6e83fe8f1/) | [Big O Cheetsheet](https://www.bigocheatsheet.com/)

Order of best to Worst Bing O Complexit
- O(1)
- O(log n)
- O(n)
- O(n log n)
- O(n^2)
- O(2^n)
- O(n!)

# O(1) - Constant time complexity
```javascript
  const myArray=[5,6,8,9];
  const myHashTable={key1:'Hello', key2:'World'};
  console.log(myArray[1]); //6
  console.log(myHashTable['key1']) // Hello
```
# O(n) - Linear time complexity
As the n number increases time takes to find the element will be increased
```javascript
const myArray=[5,6,8,9];
for (var i = 0; myArray.length; i++) {  
  console.log(array[i]);
}
// Loop has to run for 4 times this will increase based on the no of elements
```

# O(log n) - Logarithmic time complexity
As the n number increases the time taking to find the elements will be decreased

```javascript
// Ex1 :
for (var i = 1; i < n; i = i * 2)  {
  console.log(i);
}
// Ex2:
for (i = n; i >= 1; i = i/2) {
  console.log(i);
}
```
Better example for O(log n) is Binary Search which we can only do on ***Sorted*** array
```javascript
//Binary search implementationvar 

var doSearch = function(array, targetValue) {    
  var minIndex = 0;    
  var maxIndex = array.length - 1;    
  var currentIndex;    var currentElement;        
  while (minIndex <= maxIndex) {        
    currentIndex = (minIndex + maxIndex) / 2 | 0;        
    currentElement = array[currentIndex];        
    if (currentElement < targetValue) {            
      minIndex = currentIndex + 1;        
    } 
    else if (currentElement > targetValue) {            
      maxIndex = currentIndex - 1;        
    } else {            
      return currentIndex;        
    }    
  }    
  return -1;  //If the index of the element is not found.
};
```
# O(n^2) - Quadratic time complexity
For each element in an array will loop through with all other remaining elements every time then it is called O(n^2). 
A good example of this is checking to see whether there are any duplicates in a deck of cards.include bubble sort, selection sort, and insertion sort.
```javascript
for(var i = 0; i < length; i++) {     
    //has O(n) time complexity    
    for(var j = 0; j < length; j++) { 
        //has O(n^2) time complexity      // More loops?
        // If it has one more loop O(n^3) => one more loop inside it O(n^4)...etc
    }
}
```
