# State

The State component is the most generic component possible, exposing to the children function the state and setState, wrapped in a classic React.Component class.

```js
import { State } from 'react-powerplug'
```

```jsx
<State initial={{ isLoading: false, data: null }}>
  {({ state, setState }) => {
    const onStart = data => setState({ isLoading: true })
    const onFinish = data => setState({ data, isLoading: false })

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

TL;DR: `{ state, setState }`

**state**  
`object`  
Your state

**setState**  
`(object | (state: object) => object) => void`  
State setter. Is the [setState](https://facebook.github.io/react/docs/react-component.html#setstate) from React.Component.
