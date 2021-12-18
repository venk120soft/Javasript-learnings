Debouncing and Throtling enhances to improve website performance. (by limiting/minimizing series of event fires into few event calls)

Examples include window resizing, scrolling for Throttling and search functionality for debouncing

# Difference between Throttling and Debouncing?
The main difference between throttling and debouncing is that throttling executes the function at a regular interval, 
while debouncing executes the function only after some cooling period.

## Throttling:
Throttling is a technique in which, no matter how many times the user fires the event, 
the attached function will be executed only once in a given time interval.
setTimeOut(callbackFunction, delayInMilliseconds) can be used to implement this

Examples: window resizing and scrolling
## Debouncing:
In the debouncing technique, no matter how many times the user fires the event, 
the attached function will be executed only after the specified time once the user stops firing the event.
setTimeOut(callbackFunction, delayInMilliseconds) and clearTimeout(timerId) can be used to implement this

Example: search functionality on textbox
### When you need to implement Debouncing and throttling?
A: Debouncing and throttling are recommended to use on events that a user can fire more often than you need them to.
Examples include window resizing and scrolling and search functionality 

Let's say we have heavy computations or fetching data on each event(on search tex change) firing then we can make use of this.
on each key the user has entered we call api to fetch the data, to avoid this let's wait for sometime until the user has entered the text 
ex: wait for 200 sec then  pass the text. in this way we can avoid multiple api calls hitting to the server.

```javascript
// Debounce function: Input as function which needs to be debounced and delay is the debounced time in milliseconds
var  debounceFunction  =  function (func, delay) {
	// Cancels the setTimeout method execution
	clearTimeout(timerId)

	// Executes the func after delay time.
	timerId  =  setTimeout(func, delay)
}

// Throttle function: Input as function which needs to be throttled and delay is the time interval in milliseconds
var  throttleFunction  =  function (func, delay) {
	// If setTimeout is already scheduled, no need to do anything
	if (timerId) {
		return
	}

	// Schedule a setTimeout after delay seconds
	timerId  =  setTimeout(function () {
		func()
		
		// Once setTimeout function execution is finished, timerId = undefined so that in <br>
		// the next scroll event function execution can be scheduled by the setTimeout
		timerId  =  undefined;
	}, delay)
}
```

## Throttling and Debouncing
#### Throttling
Throttling enforces a maximum number of times a function can be called over time. As in "execute this function at most once every 100 milliseconds."
```javascript
// our simple throttle function
function throttle (callback, limit) {
    var wait = false;                  // Initially, we're not waiting
    return function () {               // We return a throttled function
        if (!wait) {                   // If we're not waiting
            callback.call();           // Execute users function
            wait = true;               // Prevent future invocations
            setTimeout(function () {   // After a period of time
                wait = false;          // And allow future invocations
            }, limit);
        }
    }
}

// the function that you want to be throttled
function doStuff(){
    // do some stuff
}

// On scroll, allow function to run at most 1 time per 100ms
window.addEventListener("scroll", throttle(doStuff, 100));
```
#### Debouncing
In this example, nothing will happen until the user starts moving the mouse, and then stops moving it for at least 250ms.
```javascript
const debounce = (callback, wait) => {
  let timeoutId = null;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
}

// the function that you want to be debounced
function doStuff(){
    // do some stuff
}

// In this example, nothing will happen until the user starts moving the mouse, and then stops moving it for at least 250ms.
window.addEventListener("mousemove", debounce(doStuff, 500));

```
