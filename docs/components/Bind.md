# Bind

The Bind component has a slightly different proposal from the other components. It's not so generic, and was made to deal with inputs.

```js
import { Bind } from 'react-powerplug'
``` 

```jsx
<Bind>
  {({ value, setValue }) => (
    <ControlledInput
      value={value}
      onChange={setValue}
    />
  )}
</Bind>
``` 

```jsx
<Bind initial="hello world">
  {({ bind }) => (
    <ControlledInput {...bind} />
  )}
</Bind>
``` 

```jsx
// from a different callback argument
<Bind getter={value => value}>
  {({ setValue, value }) => (
    <ControlledInput
      value={value}
      onInputValueChange={setValue}
    />
  )}
</Bind>
```

## Bind Props

**initial = ''** *(optional)*  
Specifies the initial value state.  
By default, the initial count state is an empty string.

**getter = (event) => event.target.value** *(optional)*  
Specifies the getter function, used in `setValue` method.  
By default, the getter extracts the value from a input [Event](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Counter Callback Props

TL;DR: `{ value, setValue, bind }`

**value**  
`any`
Your value state

**setValue**  
`(getter)`
Set a new value based on your getter function

**bind**  
`{ onChange: setValue, value: value }`
Just add water™ object with onChange and value. So you can in a practical way bind your input.
```jsx
<input {...bind} />
``` 
