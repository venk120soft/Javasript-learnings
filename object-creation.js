/** Creating array from string has below methods **/
const string = 'hi there';

const usingSplit = string.split('');
const usingSpread = [...string];
const usingArrayFrom = Array.from(string);
const usingObjectAssign = Object.assign([], string);

// Result
// o/p for all above would be: [ 'h', 'i', ' ', 't', 'h', 'e', 'r', 'e' ]

/****************************************
Creating Objects
0. using object assign to convert string to an object
1. Object literals
2. Object.create() with descriptors
3. function + new
4. factory function with closures
5. JS Class

****************************************/
let log = console.log;

// 0. using object assign to convert string to an object
const stringToObjUsingObjectAssign = Object.assign({}, string); // O/p {0: 'h', 1: 'i', 2: ' ', 3: 't', 4: 'h', 5: 'e', 6: 'r', 7: 'e'}
log('------------------------------');

// 1. Object literals ////////////////////////////////////
let obj1 = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: function(){
        console.log(this.prop1);
    }
}
log(1, obj1);
obj1.prop3();
log('------------------------------')

// 2. Object.create ////////////////////////////////////
let proto = {
    prop3: function(){
        console.log(this.prop1);
    }
}
let obj2 = Object.create({}, {
    prop1: {
        writable: true,
        enumerable: true,
        configurable: true,
        value: 'value1'
    },
    prop2: {
        writable: true,
        enumerable: false,
        configurable: true,
        value: 'value2'
    }
});
obj2.prop3 = function(){
    console.log(this.prop1);
}
log(2, obj2);
obj2.prop3();
log('------------------------------')


// 3. new + function ////////////////////////////////////
let Obj = function(v1, v2){
    this.prop1 = v1;
    this.prop2 = v2;
    this.prop3 = function(){
        console.log( this.prop1 );
    }
}
let obj3 = new Obj('value1', 'value2');
log(3, obj3);
obj3.prop3();
log('------------------------------')


// 4. factory function with closures
let ObjFF = function(v1, v2){
    let _prop1 = v1;
    let _prop2 = v2;
    return {
        prop1: _prop1,
        prop2: _prop2,
        prop3: function(){
            console.log(_prop1);
        }
    }
}
let obj4 = ObjFF('value1', 'value2');
log(4, obj4);
obj4.prop3();
log('------------------------------')


// 5. JS Class
class ObjC{
    constructor(v1, v2){
        this.prop1 = v1;
        this.prop2 = v2;
    }
    prop3() {
        console.log( this.prop1 );
    }
}
let obj5 = new ObjC('value1', 'value2');
log(5, obj5);
obj5.prop3();
log('------------------------------')
// ****************************************************************************************************
enum myConstants{
a='A',
b='B',
c='C'
}
// accessing elementes statically
let aValue=myConstants['a']; 
log('aValue=',aValue); // o/p: aValue=A

// get the value from enum dyamically
const key ='a';
aValue= myConstants[key]; // this will throw error

// correct way to access keys in enum
const getValueByKey = (key: string): string | null => {
    if (!key) return null;
    for (const [k, v] of Object.entries(myConstants))
      if (key === k) return v;
    return null;
  };
}
avalue= getValueByKey(key); // o/p: aValue=A

// For Objects
const myObj={
a:'A',
b:'B',
c:'C'
};

// Adding new prop statically
myObj={
...myObj,
d:'D'
} // o/p: {a:'A',b:'B',c:'C',d:'D'}
//Dynamic way is to keep the variable inside the brackets
const key='d';
myObj={
...myObj,
[key]:'D'
}// o/p: {a:'A',b:'B',c:'C',d:'D'}

// Updating props dynamically
  let newProps = props;
  for (const k of Object.keys(props)) {
    if (props[k] && typeof props[k] === 'function') {
      newProps = {
        ...newProps,
        [k]: safeFunc(props[k])
      };
    }
  }
  return newProps;

// How to Clone an Object in JavaScript (without reference)
// https://reactgo.com/javascript-clone-object/
// Cloning an object using Object.assign
const obj = {a:1,b:2,c:3};
const clone = Object.assign({},obj);
console.log(clone); // {a:1,b:2,c:3};

// Cloning an Object using spread operator
const obj = {a:1,b:2,c:3};
const clone = {...obj};
console.log(clone); // {a:1,b:2,c:3};

// Deep copying
const obj = {a:1,b:2,c:{d:3}};
const deepClone = JSON.parse(JSON.stringify(obj));
obj.c.d = 35;
// d value is changed
console.log(obj); // {a:1,b:2,c:{d:35}}
// d value remains unchanged because there is no reference
console.log(deepClone); // {a:1,b:2,c:{d:3}}

// Shallow copying
const obj = {a:1,b:2,c:{d:3}};
const shallowClone = {...obj};
obj.c.d = 34; // updates the d property value
console.log(obj); // {a:1,b:2,c:{d:34}}
console.log(shallowClone); // {a:1,b:2,c:{d:34}}
