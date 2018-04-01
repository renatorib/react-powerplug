# Timer

The Timer component is used for when it's necessary to re-render at regular intervals.

```js
import { Timer } from 'react-powerplug'
```

```jsx
<Timer delay={500}>
  {({ time }) => (
    <div>It is now {new Date(time).toLocaleString()}</div>
  )}
</Timer>
```

## Timer Props

**delay** _(optional)_
Specifies the delay (for `setInterval`) between re-renders in milliseconds.

The interval will be reset any time this prop changes.

Whenever `delay` is not a finite number, no interval will be set and `Timer` will
not automatically re-render.

## Timer Children Props

TL;DR: `{ time }`

**time**
`number`
The time (from `new Date().getTime()`) of the current `render` call

