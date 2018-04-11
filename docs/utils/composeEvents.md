# composeEvents

The composeEvents utility helps you when you need to pass the same callback more than once.

```jsx
import { Hover, composeEvents } from 'react-powerplug'

const HoveredDiv = ({ children, onMouseEnter, onMouseLeave, ...restProps }) => (
  <Hover>
    {({ isHover, bindHover }) => (
      <div
        {...composeEvents({ onMouseEnter, onMouseLeave }, bindHover)}
        {...restProps}
        children={children(isHover)}
      />
    )}
  </Hover>
)
```

It's just merge array of events object into single one.

```jsx
const callbacks = composeEvents(
  {
    onMouseEnter: event => console.log('first call', event),
    onMouseLeave: event => console.log('first call', event),
  },
  {
    onMouseEnter: event => console.log('second call', event),
  }
)

/**
 * callbacks = {
 *   onMouseEnter: Function,
 *   onMouseLeave: Function
 * }
 */

const App = () => (
  <>
    <div {...callbacks} />
    <div onMouseEnter={callbacks.onMouseEnter} />
  </>
)
```
