# Value

A generic component for storing raw data values.

```js
import { Value } from 'react-powerplug'
```

```jsx
<Value initial="React">
  {({ value, set }) => (
    <Select
      label="Choose one"
      options={['React', 'Preact', 'Vue']}
      value={value}
      onChange={set}
    />
  )}
</Value>
```

```jsx
<Value initial="first">
  {({ value, set }) => {
    const bindRadio = radioValue => ({
      selected: value === radioValue,
      onClick: () => set(radioValue),
    })

    return (
      <form>
        <RadioCheck {...bindRadio('first')}>First radio</RadioCheck>
        <RadioCheck {...bindRadio('second')}>Second radio</RadioCheck>
        <div>Selected value: {value}</div>
      </form>
    )
  }}
</Value>
```

## Value Props

**initial** _(required)_  
Specifies the initial value state.

**onChange** _(optional)_  
The onChange event of the Value is called whenever the value state changes.

## Value Children Props

TL;DR: `{ value, set }`

**value**  
`T`  
Your value state

**set**  
`(value: T | (value: T) => T) => void`  
Set or over the value state

**reset**  
`() => void`  
Reset value to initial
