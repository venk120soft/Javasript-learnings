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
```
/*
* To make all the functions passed into props to be exception safe
*/
export const safeClick = (props: any, onError?: (error: Error) => void): any => {
  for (const k of Object.keys(props)) {
    if (props[k] && typeof props[k] === 'function')
      props[k] = safeUtil.safeFunc(props[k], onError);
  }
  return props;
};
```

Usage from any of the component
```
    const { bgContext, iconKey, ariaLabel, bottomMargin, ...restOfProps } = this.props;
    // handling all the events to make it exception safe
    const rest = safeClick(restOfProps);
    let dropdownComponent: JSX.Element;

    // If iconKey is detected as a property, use the default icon dropdown template
    // It will ignore onRenderOption property, which should not be used at the same time.
    dropdownComponent = (
      <Dropdown
        {...rest}
        ariaLabel={ariaLabel || this.props.label}
        onRenderOption={this.onRenderIconOption}
        title={this.title}
      />
    )
```
