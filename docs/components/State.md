# State

The State component is the most generic component possible, exposing to the children function the state and setState, wrapped in a classic React.Component class.

```js
import { State } from 'react-powerplug'
```

```jsx
<State initial={{ loading: false, data: null }}>
  {({ state, setState }) => {
    const onStart = data => setState({ loading: true })
    const onFinish = data => setState({ data, loading: false })

    return (
      <DataReceiver data={state.data} onStart={onStart} onFinish={onFinish} />
    )
  }}
</State>
```

## State Props

**initial = {}** _(optional)_  
Specifies the initial state, must be an object.
By default, the initial state is an empty object.

**onChange** _(optional)_  
The onChange event of the State is called whenever the state changes.

## State Children Props

TL;DR: `{ state, setState, resetState }`

**state**  
`object`  
Your state

**setState**  
`(object | (state: object) => object, cb?: () => void) => void`  
State setter. Is the [setState](https://facebook.github.io/react/docs/react-component.html#setstate) from React.Component.

**resetState**  
`(cb?: () => void) => void`  
Resets state to initial value (_the value equal to current! initial prop_).
