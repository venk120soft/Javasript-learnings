### Generic function to handle any exception throwing from function or any event handler

```javascript
/*
* Generic function to handle errors and make exception safe
* onInvoke is a main function to be executed
* onError is an optional which executes on error from main function
*/
export function safeFunc<P extends Array<any>, R>(
  onInvoke: (...args: P) => R,
  onError?: (error: Error, ...args: P) => void
): (...args: P) => R | void {

  return function(this: any, ...args: P): R | void {
    try {
      return onInvoke.call(this, ...args);
    } catch (err: any) {
      // We can log to any other reporting services from here
      loggerService.error(`safeFunc() unexpected failure in onInvoke:  ${err}`);
      if (onError) {
        try {
          return onError.call(this.err, ...args);
        } catch (err: any) {
          loggerService.error(`safeFunc() unexpected failure in onError:  ${err}`);
        }
      }
      return;
    }
  };
}
```
This function can be used as follows onError is an optional:
```javascript
safeFunc(()=>{
// we can write any logic
})
```
Example to handle the component like button, dropdown, etc

```javascript
/*
* To make all the functions passed into props to be exception safe
*/
export const safeClick = (props: any): any => {
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
};
```
