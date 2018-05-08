# State

The Reducer component lets you create Redux-like reducers.

## Usage

```js
import { Reducer } from 'react-powerplug'
```

```jsx
<Reducer
  initial={{ count: 0 }}
  actions={{
    inc: (state, amount = 1) => ({ count: state.count + amount }),
    dec: (state, amount = 1) => ({ count: state.count - amount }),
  }}
>
  {({ state, dispatch }) => (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch('inc', 2)}>+</button>
      <button onClick={() => dispatch('dec', 1)}>-</button>
    </div>
  )}
</Reducer>
```

## State Props

**initial = {}** _(optional)_  
Specifies the initial state, must be an object.
By default, the initial state is an empty object.

**actions = {}** _(optional)_  
Specifies action handlers.

* The keys of the object should be the types of the actions you want to handle from `dispatch`.
* The values should be handler functions that accept `state` as the first argument. Any other arguments from `dispatch` will be passed after `state`. The return value of a handler is shallow-merged with the current state.

  ```ts
  handleAction = (state: object, ...payload: any[]) => object | null
  ```

## State Children Props

TL;DR: `{ state, dispatch }`

**state**  
`object`  
Your state

**dispatch**

```ts
(type: string, ...args: any[]) => void
```

Dispatch an action. The first argument, `type`, must have a matching action or it will throw an error.

## Differences from Redux

* The result of an action handler is shallow-merged with the previous state instead of replacing the previous state. (The shallow merge uses `setState` under the hood.)
* `dispatch` takes `type` as the first argument instead of an object with a `type` key. (This makes it easier to bind and curry).
