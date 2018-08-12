# Input

```js
import { Input } from 'react-powerplug'
```

```jsx
<Input>
  {({ value, set }) => (
    <ControlledInput value={value} onChange={e => set(e.target.value)} />
  )}
</Input>
```

```jsx
<Input initial="hello world">
  {({ bind }) => <ControlledInput {...bind} />}
</Input>
```

## Input Props

**initial = ''** _(optional)_  
Specifies the initial value state.  
By default, the initial count state is an empty string.

**onChange** _(optional)_  
The onChange event of the Input is called whenever the value state changes.

## Input Children Props

TL;DR: `{ value, set, bind }`

**value**  
`any`  
Your value state

**set**  
`(value) => any`  
Set a new value. Can be a function that pass actual value as args. Ex.: `set(value => value + 1)`

**bind**  
`{ value: value, onChange: (event) => event.target.value }`  
Just add water™ object with onChange and value. So you can in a practical way bind your input.

```jsx
<input {...bind} />
```

**reset**  
`() => void`  
Reset value to initial
