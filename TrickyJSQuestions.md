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

