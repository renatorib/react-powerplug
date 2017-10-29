# Value

The Value component is a generic component to store a some raw string/number value.

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

**initial = ''** *(optional)*  
Specifies the initial value state, must be an string or number.  
By default, the initial value state is an empty string.

## Value Children Props

TL;DR: `{ value, setValue }`

**value**   
`number`  
Your value state

**setValue**  
`(value: string | number) => void`  
Set the value state


