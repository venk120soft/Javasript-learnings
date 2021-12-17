# Javascript-learnings
Note: All the synchronous code will run first and async code will be kept in event loop which will execute after the entire synchronous operations are executed
## Throttling and Debouncing
Using Debouncing and Throttling we can improve the performance of webpage. Examples include window resizing, scrolling(Throttling) and search functionality(debouncing)

Throttling is a technique in which, no matter how many times the user fires the event, 
the attached function will be executed only once in a given time interval.
setTimeOut can be used for this

In the debouncing technique, no matter how many times the user fires the event, 
the attached function will be executed only after the specified time once the user stops firing the event.
setTimeOut and clearTimeout(timerId) can be used to implement this.

[more info](https://github.com/venk120soft/typescriptBestPracticesLearnings/blob/master/Throttling%26Debouncing)

## DeepCopy and Shallow Copy
When DeepCopy is done, changes made to the copied variable, won't reflect to the original variable.
Whereas ShallowCopy do reflect the changes to original

DeepCopy can be done using Object.assign({},array), spred operator(...), JSON.parse(JSON.stringify(arrayName))

[more info](https://github.com/venk120soft/typescriptBestPracticesLearnings/blob/master/DeepVsShallowCopy)

## Event Bubling and Event Capturing
Think like  If you drop the one water drop in a very calm water then how it will bubble from where it start to end

Definition :
When We click any one of the elements in the document, the events will fire to its parent elements as well. this process is called event bubbling.

```javascript
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
Consider above code,
The standard DOM Events describes 3 phases of event propagation:

##### Capturing phase – the event goes down to the element. [from top element to Bottom]

##### Target phase – the event reached the target element. [right to the current element(target)]

##### Bubbling phase – the event bubbles up from the element. [from bottom to top]

So if we click on paragraph element we’ll see 3 alerts: p → div → form.

The process is called “bubbling”, because events “bubble” from the inner element up through parents like a bubble in the water.
Almost all the events will do the event bubling.

[more info](https://github.com/venk120soft/Javasript-learnings/blob/master/event_bubblin_vs_capturing.md)
## How do you stop the event to bubble/capture/propegation?
We can stop this using event.stopPropagation()

In case of multiple events for the element ex: 

      <input onChange={} onClick={}>

This will not work for the same element's multiple events, to handle this we have to use event.stopImmediatePropagation()

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
call(): This method accepts individual parameters, this can be used to inherit method in another object. to acheive this we must pass the first argument as the object which want to inherit.

apply(): This method accepts the list of parameters

bind(): this method will return the new function. This should be the first param to pass in and this keyword will set to the provided value with a given sequence of arguments preceding any provided when the new function is called.

[more info](https://github.com/venk120soft/Javasript-learnings/blob/master/call_apply_bind.md)

# Question and Answers
## What is Javascript? Is it Synchronous or Asynchronous?
Javascript is a synchronous, single threaded, case sensitive, object oriented programming language
It is intially created for making the web pages alive. It is used to create and control the web content.

## How Javascript Program get's executed?
Javascript program is get executed in two phases 1 is memory creation and 2 is code execution
When ever any JS program starts the Global execution context is gets created where in we have theese two phaces of execution

First memory for all the variables and functions are get created in Memory Creation context, where in undefined will be stored for all the variables and
copy of the function gets created for the functions in memory creation context as is.

In next phase,  program start running line by line and the variable values get assigned one by one and it goes to next line like wise
In any time if the program encounters with the function declaration it just skips that line start moving to next, as soon as it reaches to the line where we calling
this functions (ex: myFunc()/myFunc(a)) it will create new execution context.

In this new execution context again there are 2 phases 1) memory creation context and 2) code execution context
it follows the same way as described above like it will assign undefined to all the variables and copy will be created for the functions if it exists
as soon as it reaches return statement or curly braces(if function is void) it will retun the value to its immediate parent scope variable
and delete the specific execution context for then it will move to next line.

In case if we have nested functions(a function inside a function) then no of execution context will be created and inside that there are 2 phases will be there
as described above these are all execution context of functions will be placed inside the single call stack(program stack,machine stack)
and as soon as scoped function execution is done the context will be deleted from the stack. Finally all function call execution contexts will be deleted and return to the global execution context.

As soon as the all the lines of program is executed and reached to last curly brace or return statement the global context also get deleted

* Note: * Asynchronous code will run only when all the synchronous code is executed 
[more info](https://www.youtube.com/watch?v=iLWTnMzWtj4)
## pass by Value or pass by Ref in javascript
Javascript Always pass the parameters to the functions by Value 

## Define scope in Javascript?
Lexical scope, global scope , block scope

## What is closure? when and why do we use it?
Any function, that access variables outside of its scope is a closure, Closures are nothing but FUNCTIONS WITH PRESERVED DATA

A function inside another function will create a closure. to access the inside function variables we use this.

closures are created every time a function is created, at function creation time.
To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function

We can say **callbacks** are the examples for closures, it has access to it's parent values.
## What is the difference between writing nested functions vs closures?

## How does the asynchronous call made internally in javascript?

## what is the differnce between splice and slice
splice takes start index and delete count
Original array will be effected on splice operation performed
Splice will delete the no of elements specified as 2nd argument.

```javascript
var original=['banana','orange','apple','mango','raj'];
var result = original.splice(2,3);
console.log(original) => ['apple','mango','raj']
console.log(result) => ['apple']

var original=['banana','orange','apple','mango','raj'];
var result = original.splice(2,2);
console.log(original); => ["banana", "orange", "raj"]
console.log(result); => ["apple", "mango"]
```
slice takes start index, end index
Original array will not be effected on slice operation
The second argument will be the end index of an array.
```javascript
var original=['banana','orange','apple','mango','raj'];
var result = original.slice(2,3);
console.log(original); => ['banana','orange','apple','mango','raj']
console.log(result); => ["apple"]

 result = original.slice(2,2); 
 console.log(result) => []
 result = original.slice(2,1); 
 console.log(result) => []
 result = original.slice(2,0); 
 console.log(result) => []
 result = original.slice(2,4); 
 console.log(result) => ["apple", "mango"]
```
## What is the difference between controlled and un-controlled inputs?
If the form data is controlled by react component then it is Controlled component, if the data is controlled by the DOM itself then it's uncontrolled component.

A form element becomes “controlled” if you set its value via a prop or a state. That’s all.

ex: UnControlled component:
```javascript
  private iframe:any;
  <iframe ref={this.setIframeRef}/>
  // setting the reference to DOM object
  private setIframeRef = (comp: any) => this.iframe = comp;
  // Working with DOM object
  private postMessageToIframe = (message: any) => {
    if (this.iframe.contentWindow) {
      this.iframe.contentWindow.postMessage(
        message,
        this.serviceUrl
      );
    }
  }
  // Ex2:
        <input type="text" ref={input => this._name = input} />
        <button onClick={this.handleSubmitClick}>Sign up</button>
  private handleSubmitClick = () => {
    const name = this._name.value;
    // do something with `name`
  }
```
Controlled Components are handled by React state or PROP
```javascript
<input type='text' value={this.state.name} onChange={this.onChangeName}/>

private onChangeName=(event:any)=>this.setState({name: event.target.value});
```
<table>

<thead>

<tr>

<th>feature</th>

<th>uncontrolled</th>

<th>controlled</th>

</tr>

</thead>

<tbody>

<tr>

<td>one-time value retrieval (e.g. on submit)</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>validating on submit</td>

<td>✅</td>

<td>✅</td>

</tr>

<tr>

<td>instant field validation</td>

<td>❌</td>

<td>✅</td>

</tr>

<tr>

<td>conditionally disabling submit button</td>

<td>❌</td>

<td>✅</td>

</tr>

<tr>

<td>enforcing input format</td>

<td>❌</td>

<td>✅</td>

</tr>

<tr>

<td>several inputs for one piece of data</td>

<td>❌</td>

<td>✅</td>

</tr>

<tr>

<td>dynamic inputs</td>

<td>❌</td>

<td>✅</td>

</tr>

</tbody>

</table>

[more info on it](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)

In most cases, we recommend using controlled components to implement forms. 

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.

[more info](https://reactjs.org/docs/uncontrolled-components.html)
