Resources:
[more info](https://www.jsv9000.app/)
| [msdn docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing) 
| [async await](https://code-boxx.com/synchronous-asynchronous-javascript/)
| [good read](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)

JavaScript is a synchronous, blocking, single-threaded language, in which only one operation can be in progress at a time.
> **_NOTE:_** 
> - Synchronous code will block the main thread in case of long running jobs 
> - Asynchronous code will run only when Synchronous code is fully executed 
> - Asynchronous code will help us to show some status(loading) of the job until it returns something
> - Asynchronous code will run in seperate thread which will be queued in Event loop as soon as the response comes or specified time limit Event loop will execute this task 
[read more](https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff)

If we have long running jobs like fetching data from an api that may take few milli seconds to minutes. and if we have dependncy with response of data running it synchronously 
will block user to run next steps until it's completed

Synchronous = `happens at the same time.` Asynchronous = `doesn't happen at the same time.`
We can make the code asynchronous in different ways to perform long network requests without blocking the main thread.
- Callbacks
- Promises
- Async Await
- Web workers

Below is best example for blocking code and to see the synchronous code behavior: `Until the user click ok on alert next statements won't run`

```javascript
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('You clicked me!');

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});

```
Unblocking asynchronous code
```javascript
function loadAsset(callback) {
 // unblocking asynchronous code
 setTimeOut(callback,3000); // ca
 console.log('You will see this message immediatly')
}

function displayImage() {
  console.log('Message after 3000 seconds');
}

loadAsset(displayImage);
o/p: 
You will see this message immediatly
Message after 3000 seconds
```

##### CallBacks
Callbacks are helpful to handle the blocking issue. but in if we have deep nested callbacks which we endup with callback hell problem. To Address this ES6 introduced Promises in 2015

##### Promises
In simple words, Promises will promise the response either it's resolved or rejected and THis will also solve the callback hell issue with chaining the functions based on the previous response

Essentially mean “the function is now running (not sure how long it will take), I promise to get back to you with the results when it is done processing”.
```javascript
console.log ('Starting');
let image;

fetch('coffee.jpg').then((response) => {
  console.log('It worked :)')
  return response.blob();
}).then((myBlob) => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

console.log ('All done!');

O/P: 
Starting
All done!
It worked :)
```
Another Example
```javascript
// (A) ASYNC ADD
async function add (first, second) {
  return first + second;
}
 
// (B) RUN ASYNC FUNCTION
add(2, 3)
.then((result) => { console.log(result); }) // (C) THEN RESOLVE RESULT ON COMPLETE
.catch((err) => { console.log(error); }) // (D) OPTIONAL - CATCH ERRORS
.finally(() => { console.log("Finally"); }); // (E) OPTIONAL - FINALLY
```
##### Async Await
In 2018 Javascript introduced, `async` and `await` functionality which is just to avoid this multiple chaining process 
await means it will wait until the process is completed
async function will be added to the event loop in seperate thread and run as synchronous operation it means `await add()` it will 
```javascript
// (A) ASYNC ADD & MULTIPLY
function add (first, second) {
  return first + second;
}
 
// (B) MULTIPLY FUNCTION
function multiply (first, second) {
  return first * second;
}

// (C) ASYNC CHAIN
add(2,3)
.then((added) => {
  console.log(added); // 5
  multiply(added, 5)
  .then((multiplied) => {
    console.log(multiplied); // 25
  });
});
```
Above can coverted to 
```javascript
// (C) AWAIT
async function addmultiply () {
  var result = await add(2, 3); // it waits until we get the result of add
  result = await multiply(result, 5); // it waits until we get the result of multiply
  console.log(result); // 25
}
addmultiply();
```
[Read this for deep understanding](https://code-boxx.com/synchronous-asynchronous-javascript/)
