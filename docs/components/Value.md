# Value

The Value component is a generic component to store a some raw data value.

```js
import { Value } from 'react-powerplug'
``` 

```jsx
<Value initial="React">
  {({ value, setValue }) => (
    <Select
      label="Choose one"
      options={['React', 'Preact', 'Vue']}
      value={value}
      onChange={setValue}
    />
  )}
</Value>
``` 

```jsx
<Value initial="first">
  {({ value, setValue }) => {
    const bindRadio = radioValue => ({
      selected: value === radioValue,
      onClick: () => setValue(radioValue),
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

**initial** *(required)*  
Specifies the initial value state.

## Value Children Props

TL;DR: `{ value, setValue }`

**value**   
`T`  
Your value state

**setValue**  
`(value: T) => void`  
Set the value state


