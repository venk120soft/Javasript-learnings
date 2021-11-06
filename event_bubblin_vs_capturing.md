Resources: [Video](https://www.youtube.com/watch?v=aVSf0b1jVKk)
[Text](https://javascript.info/bubbling-and-capturing)

## Event Bubbling 
In layman terms: When we drop a water droplet into a calm Water Container then it will bubble (disturb) water from start to end 
#### Definition: When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
#### Bottom to Top:  child -> parent -> grandParent

## Event Capturing or Event Trickling
In layman terms: In a family anything happens first Grand Parent will be informed then Parent and then Child. 

like: to get the groom for child first Grand Parent has to be informed, then parent informed then child
#### Top to Bottom: grandParent -> parent -> child

To stop the event prpegation from top to bottom or bottom to top we can use the 

We can stop this using ***event.stopPropagation()***. If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute.

In case of multiple events for the element ex: 

      <input onChange={} onClick={}>

This will not work for the same element's multiple events, to handle this we have to use ***event.stopImmediatePropagation()***

## How to diffentiate between the Event Bubling and capturing in Event handlers
```javascript
// By default if we don't pass the 3rd argument, then it is Event bubling or if we pass false also. 3rd argument here is useCapture
 document.querySelector("#grandparent")
  .addEventListener('click', (e) => {
  });
 document.querySelector("#grandparent")
  .addEventListener('click', (e) => {
  }, false);
 
 // Event Capturing or Trickling Top to Bottom
   document.querySelector("#grandparent")
  .addEventListener('click', (e) => {
  }, true);
```

Example: We have 3 different divs hierarichy and to seperate them we have added some styles to it

    <!DOCTYPE html>
    <head>
      <title>Akshay Saini</title>

      <style>
      div {
        min-width: 100px;
        min-height: 100px;
        padding: 30px;
        border: 1px solid black;
      }
      </style>
    </head>
    <body>

      <div id="grandparent">
        <div id="parent">
          <div id="child"></div>
        </div>
      </div>

      <script src="./js/index.js"></script>
    </body>
    </html>
    
 Associated EventListeners are added from the js file like below
 
 ```javascript
 document.querySelector("#grandparent")
  .addEventListener('click', (e) => {
    console.log("Grandparent Clicked!");
    //e.stopPropagation();
  }, false);

  document.querySelector("#parent")
  .addEventListener('click', (e) => {
    console.log("Parent Clicked!");
  }, false);

  document.querySelector("#child")
  .addEventListener('click', (e) => {
    console.log("Child Clicked!");
  }, false); 
  ```
  
