# What is Javascript?

If a programme language have only one CallStack then it is call single threaded programming language. 
As it process the instructions one at a time we call this as synchronous programming languages. 
Javascript is synchronous single threaded programming language i.e only one thing can happen at a time

# Javascript Run Time Environment

- Web API ==> Window object provided by all the browsers where we can call fetch, setTimeout, setInterval, caching, indexDB data storage, event listeners etc...,
  These features are implemeted by the browsers using low level languages such as c++, and these web browser api's are called  Web API's which are Asynchronous. These are not part of Javascript
  
- Call Stack
- Callback Queue
- Event loop

Ex:
```
  console.log('1');
  setTimeout(()=>console.log('2'), 1000);
  console.log('3');
  
  O/P: 1
       3
       2
```
If we take the above example and run through javascript runt time environment below are steps it follows:

- First line will be sent to the CallStack and execute the line and pop up as an anonymous task
- Second line will be sent to CallStack and Callstack will identify the WebAPI setTimeout function
- Callstack will send the setTimeout request to WebAPI and popup from the Callstack
- Now CallStack is empty then, Third line will be sent to Callstack and execute the line and popup as anonymous task
- Now, Web API will send the function specified in setTimeout to the Callback Queue after 1000 seconds
- Now the function (()=>console.log('3') ) is callbackQueue
- Eventloop will always be sync with CallStack and once all the synchronous operations are executed from the CallStack, CallStack will be Empty
- As soon as CallStack is empty, Event loop will check the callback queue. if there is any operations are pending in callbackQueue event loop will push them into Callstack in order
- As all the operations are done Event loop will send the function (()=>console.log('3') ) to callStack 
- CallStack will execute the console.log('3') operation and pop out the statement and empty the callStack that's why we see above output

# Javascript Engine vs Javascript Runtime Environment
When we give Javascript file, The JavaScript engine is kind of like the musician or the composer. That person is the one that can read this music and understand it and make sense of it.

And then the runtime is kind of like the whole package where we have the musician, but we also give that musician besides the musical notes, all these tools to play our beautiful music.

NodeJS is a Javascript runtime, It is created using C++ Programm
