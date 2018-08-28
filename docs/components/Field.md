# Field

```js
import { Field } from 'react-powerplug'
```

```jsx
<Field>
  {({ value, set }) => (
    <ControlledField value={value} onChange={e => set(e.target.value)} />
  )}
</Field>
```

```jsx
<Field initial="hello world">
  {({ bind }) => <ControlledField {...bind} />}
</Field>
```

```jsx
<Field initial={true}>
  {({ bind }) => (
    <label>
      You accept the terms? <input type="checkbox" {...bind} />
    </label>
  )}
</Field>
```

## Field Props

**initial = ''** _(optional)_  
Specifies the initial value state.  
By default, the initial count state is an empty string.

**onChange** _(optional)_  
The onChange event of the Field is called whenever the value state changes.

## Field Children Props

TL;DR: `{ value, set, bind }`

**value**  
`any`  
Your value state

**set**  
`(value) => any`  
Set a new value. Can be a function that pass actual value as args. Ex.: `set(value => value + 1)`

**bind**  
`{ value: value, onChange: Function }`  
Just add water™ object with onChange and value. So you can in a practical way bind your input.

```jsx
<input type="text" {...bind} />
```

```jsx
<input type="checkbox" {...bind}>
```

```jsx
<select {...bind}>{/* options */}</select>
```

**reset**  
`() => void`  
Reset value to initial
