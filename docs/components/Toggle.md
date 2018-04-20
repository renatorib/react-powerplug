# Toggle

The Toggle component is used to toggle a boolean. True/false.

```js
import { Toggle } from 'react-powerplug'
```

```jsx
<Toggle initial={false}>
  {({ on, toggle }) => <Checkbox onClick={toggle} checked={on} />}
</Toggle>
```

## Toggle Props

**initial = false** _(optional)_  
Specifies the initial on state, must be an boolean.
By default, the initial on state is false.

**onChange** _(optional)_  
Callback that fires when state changes.

## Toggle Children Props

TL;DR: `{ on, toggle, setOn }`

**on**  
`boolean`  
Your `on` state value

**toggle**  
`() => void`  
Toggle your `on` state value

**setOn**  
`(value: boolean) => void`  
Arbitrary set a value to `on` state
