External Resources:
- [How Javascript is executed](https://www.youtube.com/watch?v=iLWTnMzWtj4) | [Event loop Task Sub task Visualize](https://www.jsv9000.app/)
- [Currying](https://www.quora.com/What-is-a-difference-between-closure-and-nested-function-javascript)
- [Controlled Un Controlled Components](https://reactjs.org/docs/uncontrolled-components.html)
- [Controlled Un Controlled Components 2](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
- [Event bubbling & capturing](https://javascript.info/bubbling-and-capturing)
- [How does async operations are executed](https://www.youtube.com/watch?v=FOZUnFxDDK0)
- [Event loop, call stack, WebApi's, Callback queue, job queue](https://felixgerschau.com/javascript-event-loop-call-stack/)
- [Performance optimization](https://3perf.com/talks/web-perf-101/) | [Webpack optimizations](https://github.com/GoogleChromeLabs/webpack-libs-optimizations)
- [MobX best practices](https://mobx.js.org/defining-data-stores.html)

In same repo:
- [Throttling and Debouncing](./throttling&debouncing.md)
- [DeepCopy and Shallow Copy](./deep_copy_vs_shallow_copy.md)
- [Event Bubling and Event Capturing](./event_bubblin_vs_capturing.md)
- [Call Apply Bind](./call_apply_bind.md)

# Javascript-learnings
Note: All the synchronous code will run first and async code will be kept in event loop which will execute after the entire synchronous operations are executed

## Throttling and Debouncing
Using Debouncing and Throttling we can improve the performance of webpage. Examples include window resizing, scrolling for Throttling and search functionality for debouncing

Throttling is a technique in which, no matter how many times the user fires the event, 
the attached function will be executed only once in a given time interval.
setTimeOut can be used for this

In the debouncing technique, no matter how many times the user fires the event, 
the attached function will be executed only after the specified time once the user stops firing the event.
setTimeOut and clearTimeout(timerId) can be used to implement this.

[more info](https://github.com/venk120soft/Javasript-learnings/blob/master/throttling&debouncing.md)

## Deep Copy and Shallow Copy
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
Javascript is a synchronous, single threaded, case sensitive, object oriented programming language having single callStack and single heap to process the statements
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

## How does javascript program works? How does the asynch operations are executed?
Javascript is single threaded it means it will run one task at a time as it has only one **Callstack**. Javascript run time environment have follwing blocks
- Memory Heap
- Call stack
- Web Api's(such as setTimeout and all other async operations mainly available in Web Browser Window object)
- Callback Queue
- Promise Queue / Job Queue --> This is high priority than the callback queue which is introduced in ES6
- Event loop - Will always be sync with Callstack and Callbackqueue. as soon as CallStack done with synchrnous operations it will push callback queue jobs into Callstack
Javascript first allocate the memory for all the variables and functions in Memory Heap and in while code execution all synchornous operations are getting exectuted first by pushing into call stack and execute them in sequesnce 

```
  console.log('This is 1');
  setTimeout(()=>console.log('I'm async operation. This is 2'), 2000)
  console.log('This is 3');
```
- Whenever compiler reach Blocking code such as asynchronous operations(setTimeout) then that will push into Call stack then Call stack will send the call to browser WebApi's, then it will be removed from call stack and move to the next statement. like wise all the async operations are pushed into Web api through Call stack.

- Web api will handle the statement based on when it should run from above example it should wait 2000 mi seconds and run the function. so after 2000 m.seconds it will push this function to callback queue. Now the function statement is in callback Queue. 

- Event loop is always keep in sync with Callstack, so as soon as Callstack is empty it will look into Callback queue, if it finds any statements are waiting then Event loop will push callback functions into CallStack and Callstack will execute the statements inside function synchronously
[m0re info in video 16.5](https://www.youtube.com/watch?v=FOZUnFxDDK0) | [Event loop, call stack, WebApi's, Callback queue, job queue](https://felixgerschau.com/javascript-event-loop-call-stack/)
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

## What is Currying?
Currying is advance way allow you to partially evaluate a function by only passing in a subset of its arguments.
```javascript
  function multiply (a, b) { 
    return a * b; 
  } 
  const double = multiply(2); 
  const eight = double(4); 
  eight = 8; 
```
You’ll notice that by providing a single argument to the multiply function, the result was another function that already has the first argument defined as 2. Later, calling that new function with one argument will always multiply by 2.

However, this isn’t directly possible in JS. The primary reason this will likely never be a feature is that JS doesn’t have strict function signatures. I might create a function with no defined arguments and use the arguments object to iterate through an arbitrary number of arguments (modern JS also allows the spread operator for arguments). It’s also common to allow users to only supply a subset of arguments while providing sensible defaults for the ones that are omitted. Because of this behavior, currying in JS would require extra work. The closest you will get using only builtins is the bind method on the Function prototype.
```javascript
  function multiply (a, b) { 
    return a * b; 
  } 
  const double = multiply.bind(null, 2); 
  const eight = double(4); 
  eight == 8; 
```
However, this will only support a single curry because a bound function cannot be bound again. 
It will also cause issues if the function you want to curry has any dependence on the execution context (the this object). 
There are ways around this but would involve a lot more work upfront.
[more info](https://www.quora.com/What-is-a-difference-between-closure-and-nested-function-javascript)
## What is the difference between writing nested functions vs closures?

## How does the asynchronous call made internally in javascript?
In Javascript, all the **synchronous** operations will be executed first then only **asynchronous** operations will be executed next.

As soon as the code reaches the async operation statement, it will push the statement into the Event loop and Call Stack. 
These asynchrnous operations will be get executed one after other

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
## Async vs Defer keywords in script tag How it Works
- **Normal** The HTML is parsed until the <script> tag is reached. At that point, parsing of HTML is blocked and a request is made to fetch the script file. Once the script is executed, HTML parsing resumes again
- async and defer are boolean valiues that we add to the script tag to tell the browser how do we want to run our JS files.
- With async (asynchronous) attribute, the HTML is parsed while the browser loads and execute the script at the same time. The script execution can happen whenever the script becomes ready (potentially before HTML parsing completes) after being fetched in parallel with the document parsing.
- With defer attribute in place, the script file is downloaded in parallel while the HTML document is still parsing. However, even if the script file is fully downloaded long before the document is finished HTML parsing, the script is not executed until the HTML parsing is complete.
```javascript
  <script src=""./test.js />
  <script src=""./test.js async/>
  <script src=""./test.js defer/>
```
## Difference betwen Async vs Defer
- async scripts would execute as soon as they download, without keeping the order. This means that if you have an async React bundle and an async app bundle, and the React bundle is larger, the app would download and execute earlier than React – and the site will break.
- defer scripts, unlike async, would execute in the right order only after all scripts are downloaded. Because of this, defer might be safer than async when optimizing a large complex app.

- Use async attribute if the content of page does not rely on any scripts.
- Use defer attribute if the content of page rely on script as you want to trigger this script when HTML is fully loaded.
  [more info](https://3perf.com/talks/web-perf-101/) | [for image explanation](https://www.google.com/search?q=async+vs+defer&sxsrf=AOaemvJWBwjxWdk1PLgHh_-MmUwDGdvI5w:1641547873609&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjX-4yvqp_1AhXel2oFHcXTBAUQ_AUoAXoECAEQAw&biw=1538&bih=797&dpr=1#imgrc=-HPoVDuach1YoM)

External Resources:
- [How Javascript is executed](https://www.youtube.com/watch?v=iLWTnMzWtj4) | [Event loop Task Sub task Visualize](https://www.jsv9000.app/)
- [Currying](https://www.quora.com/What-is-a-difference-between-closure-and-nested-function-javascript)
- [Controlled Un Controlled Components](https://reactjs.org/docs/uncontrolled-components.html)
- [Controlled Un Controlled Components 2](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
- [Event bubbling & capturing](https://javascript.info/bubbling-and-capturing)

In same repo:
- [Throttling and Debouncing](./throttling&debouncing.md)
- [DeepCopy and Shallow Copy](./deep_copy_vs_shallow_copy.md)
- [Event Bubling and Event Capturing](./event_bubblin_vs_capturing.md)
- [Call Apply Bind](./call_apply_bind.md)
