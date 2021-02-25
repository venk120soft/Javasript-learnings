## Get Uniq elements from an array
```javascript
// 1st way
const getUniqElementsFromArray = (yourArray) => [...new Set(yourArray)]

//2nd Way

let newArray = arr.filter(callback(currentValue[, index[, array]]) {
  // return element for newArray, if true
}[, thisArg]);
list = list.filter(function (x, i, a) { 
    return a.indexOf(x) === i; 
});

```
## Get Duplicate elements from an array
```javascript
var getDuplicatesFromArray = (givenArray) => {
    const yourArrayWithoutDuplicates = [...new Set(givenArray)]
    let duplicates = [...givenArray]
    yourArrayWithoutDuplicates.forEach((item) => {
      const i = duplicates.indexOf(item)
      duplicates = duplicates
        .slice(0, i)
        .concat(duplicates.slice(i + 1, duplicates.length))
    });
    return duplicates;
}
// Ex: getDuplicatesFromArray([1,2,2,3,3,5])
// [2, 3]
```

## Get the Elements with count from an array
```javascript
var getDuplicatesFromArray = (array) => {
  const count = {}
  const result = []
  array.forEach(item => {
      if (count[item]) {
         count[item] +=1
         return
      }
      count[item] = 1
  });
  
  for (let prop in count){
      if (count[prop] >=2){
          result.push(prop)
      }
  }
  
  console.log(count)
  return result;
}

Ex: const items = ['pencil', 'book','pencil']
getDuplicatesFromArray(items);
// {pencil: 2, book: 1} // elements with the count of it.
// [pencil] // only duplicates will be listed here
```
