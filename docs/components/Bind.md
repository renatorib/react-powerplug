# Bind

The Bind component will renamed in v1.0 to **BindInput**.  


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

## Bind Props

**initial = ''** *(optional)*  
Specifies the initial value state.  
By default, the initial count state is an empty string.

## Bind Children Props

TL;DR: `{ value, setValue, bind }`

**value**  
`any`  
Your value state

**setValue**  
`(value) => any`  
Set a new value based on your getter function

**bind**  
`{ value: value, onChange: (event) => event.target.value }`  
Just add water™ object with onChange and value. So you can in a practical way bind your input.
```jsx
<input {...bind} />
``` 
