# Javasript-learnings
Javascript Learnings

I have added the concepts to Improve Wesite Performance using Debouncing and Throttling

## Throttling and Debouncing
Throttling is a technique in which, no matter how many times the user fires the event, 
the attached function will be executed only once in a given time interval.
setTimeOut can be used for this

In the debouncing technique, no matter how many times the user fires the event, 
the attached function will be executed only after the specified time once the user stops firing the event.
setTimeOut and clearTimeout(timerId) can be used to implement this.

[more info](https://github.com/venk120soft/typescriptBestPracticesLearnings/blob/master/Throttling%26Debouncing)

## DeepCopy and Shallow Copy:
When DeepCopy is done, when we make changes to the copy variable it won't reflect to the original variable.
Whereas ShallowCopy do reflect the changes to original

DeepCopy can be done using Object.assign({},array), spred operator(...), JSON.parse(JSON.stringify(arrayName))

[more info](https://github.com/venk120soft/typescriptBestPracticesLearnings/blob/master/DeepVsShallowCopy)

## Event Bubling and Event Capturing
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

## pass by Value vs pass by Ref in javascript




# Question and Answers
## What is Javascript?
Javascript is a single threaded, case sensitive, object oriented programming language
It is intially created for making the web pages alive. It is used to create and control the web content.

## Define scope in Javascript?
Lexical scope, global scope , block scope

## What is closure and when do we use it?
A function inside other function will create a closure, 

