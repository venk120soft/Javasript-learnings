# Javasript-learnings

Using Debouncing and Throttling we can improve the performance of webpage

## Throttling and Debouncing
Throttling is a technique in which, no matter how many times the user fires the event, 
the attached function will be executed only once in a given time interval.
setTimeOut can be used for this

In the debouncing technique, no matter how many times the user fires the event, 
the attached function will be executed only after the specified time once the user stops firing the event.
setTimeOut and clearTimeout(timerId) can be used to implement this.

[more info](https://github.com/venk120soft/typescriptBestPracticesLearnings/blob/master/Throttling%26Debouncing)

## DeepCopy and Shallow Copy
When DeepCopy is done, when we make changes to the copy variable it won't reflect to the original variable.
Whereas ShallowCopy do reflect the changes to original

DeepCopy can be done using Object.assign({},array), spred operator(...), JSON.parse(JSON.stringify(arrayName))

[more info](https://github.com/venk120soft/typescriptBestPracticesLearnings/blob/master/DeepVsShallowCopy)

## Event Bubling and Event Capturing
Think lik you dropped the water drop in very calm water then how the water will bubble from where it start to end
https://javascript.info/bubbling-and-capturing
```javascript
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
Consider above code,
The standard DOM Events describes 3 phases of event propagation:

Capturing phase – the event goes down to the element. [from top element to Bottom]
Target phase – the event reached the target element. [right to the current element(target)]
Bubbling phase – the event bubbles up from the element. [from bottom to top]

So if we click on <p>, then we’ll see 3 alerts: p → div → form.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.
Almost all the events will do the event bubling.

Definition :
When We click any one of the elements in the document, the events will fire to top elements as well. this process is called event bubbling.

## How do you stop the event to bubble/capture/propegation?
We can stop this using event.stopPropagation()
This will not work for the same element's multiple events, to handle this we have to use event.stopImmediatePropagation()

## What is the difference between Controlled and un controlled inputs?
https://reactjs.org/docs/uncontrolled-components.html
In most cases, we recommend using controlled components to implement forms. 
In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

What is the difference between Controlled and un controlled components?

## What is the difference between declarative and Imperative programming?
Imperative programming is something like instructing a machine what to do step by step. ex: assembly language
Declarative programming is something like instructing a machine what you want to get and it suppoes to figure it how to do it.
Ex: React, Sql, HTML, CSS, DOM its a more readable format , lower level details we dont see
Is React Application Declarative or Imperative?
React application is Declarative.

## Web Workers In javascript
Javascript is a single threaded application, when we want to do mutliple operations on the web page, due to its single threaded behaviour the page will go to un responsive.

Web worker provides mechanism to span(run) a seperate script in background for web application, where we can do any complex operations without disturbing the UI.
The communication between theese 2 (page and worker) happens using postMessge() and onMessage().
page/worker can send the message using postMessage() and receive the message using onMessage() call back functions

```javascript
Ex: WebWorkerTest.html

// to check webWorker functionality available for browser
if(window.WebWorker){
  var myWorker= new WebWorker("worker.js");
  var message= {abc:{num1: 1, num2:2}};
  // sending the message to worker.js
  myWorker.postMessage(message);

  myWorker.onMessage = function(e){
    console.log(e.data.result);
  }
}

// Worker.js

// it receives the message
this.onMessage= function(e){
  if(e.data.abc!==undefined){
    // after receiving message making the new result object and sending back again
    this.postMessage({
        result: e.data.abc.num1+ e.data.abc.num2
    })
  }
}

// for importing other web workers we use below method
importScripts() 
// for terminating  web worker
myWorker.terminate();
```
Web worker has no acess to 
window object, document object and parent object, however it has access to navigator, xmlhttp request  user agent, geo location, cookeyenabled, application cache, href, setTimeOut()/ ClearTimeOut(), setinterval()/clearInterval()
Note: Async calls or ajax calls are 

## Call Apply Bind


# Question and Answers
## What is Javascript? Is it synchronous or Asynchronous?
Javascript is a single threaded, case sensitive, object oriented programming language
It is intially created for making the web pages alive. It is used to create and control the web content.

## pass by Value or pass by Ref in javascript
Javascript Always pass the parameters to the functions by Value 

## Define scope in Javascript?
Lexical scope, global scope , block scope

## What is closure? when and why do we use it?
A function inside another function will create a closure. to access the inside function variables we use this.    

## What is the difference between writing nested functions vs closures?

## How does the asynchronous call made internally in javascript?

## Whats the difference between Call, Apply and bind
