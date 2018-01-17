# Value

The Value component is a generic component to store a some raw string value.

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
Specifies the initial value state, must be a string.  
By default, the initial value state is an empty string.

## Value Children Props

TL;DR: `{ value, setValue }`

**value**   
`string`  
Your value state

**setValue**  
`(value: string) => void`  
Set the value state


