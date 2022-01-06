# What is Javascript?

If a programme language have only one CallStack then it is call single threaded programming language. 
As it process the instructions one at a time we call this as synchronous programming languages. 
Javascript is synchronous single threaded programming language i.e only one thing can happen at a time

# Javascript Run Time Environment

**In Short:** First Javascript will run all the synchronous code by pushing the code to callstack in order. where ever Asynchronous statements are encountered those will be send to WebAPI from callstack. once all synchronous code executed, asyncronous operations such as promisies will sent from Web API to job queue and all other async operations are sent to Callback queue. Then Eventloop will always be sync with Callstack, hence as soon as Callstack is empty it will look for the pending tasks in Job Queue and push one by one to Callstack. once JobQueue is empty then It will look for the pending tasks inside the Callback Queue and Execute all of the Operations.

- Call Stack
- Web API ==> Window object provided by all the browsers where we can call fetch, setTimeout, setInterval, caching, indexDB data storage, event listeners etc...,
  These features are implemeted by the browsers using low level languages such as c++, and these web browser api's are called  Web API's which are Asynchronous. These are not part of Javascript
- Job Queue ==> Introduced from ES5 with Promises. It has heigher Priority than Callback Queue
- Callback Queue
- Event loop

Ex1: Without Promises Job Queue is not included
```
  console.log('1');
  setTimeout(()=>console.log('2'), 1000);
  console.log('3');
  
  O/P: 1
       3
       2
```
Ex2: With Promises Job Queue will be included in the flow [more info](https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd)
```
  console.log('Message no. 1: Sync');
  setTimeout(function() {
     console.log('Message no. 2: setTimeout');
  }, 0);
  var promise = new Promise(function(resolve, reject) {
     resolve();
  });
  promise.then(function(resolve) {
     console.log('Message no. 3: 1st Promise');
  })
  .then(function(resolve) {
     console.log('Message no. 4: 2nd Promise');
  });
  console.log('Message no. 5: Sync');
  O/P: Message no. 1: Sync
       Message no. 5: Sync
       Message no. 3: 1st Promise
       Message no. 4: 2nd Promise
       Message no. 2: setTimeout
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

Job Queue has high priority in executing callbacks, if event loop tick comes to Job Queue, it will execute all the jobs in job queue first until it gets empty, then will move to callback queue.

# Javascript Engine vs Javascript Runtime Environment
When we give Javascript file, The JavaScript engine is kind of like the musician or the composer. That person is the one that can read this music and understand it and make sense of it.

And then the runtime is kind of like the whole package where we have the musician, but we also give that musician besides the musical notes, all these tools to play our beautiful music.

NodeJS is a Javascript runtime, It is created using C++ Programm
