# Interval

The Interval component is used for when it's necessary to re-render at regular intervals. Also known as Frame.

```js
import { Interval } from 'react-powerplug'
```

```jsx
<Interval delay={1000}>
  {({ start, stop }) => (
    <>
      <div>The time is now {new Date().toLocaleTimeString()}</div>
      <button onClick={() => stop()}>Stop interval</button>
      <button onClick={() => resume()}>Start interval</button>
    </>
  )}
</Interval>
```

## Interval Props

**delay** _(optional)_
Specifies the delay (for `setInterval`) between re-renders in milliseconds.

The interval will be reset any time this prop changes.

Whenever `delay` is not a finite number, no interval will be set and `Interval` will
not automatically re-render.

## Interval Children Props

TL;DR: `{ stop, start, toggle }`

**stop**
`() => void`
Stop (or pause) re-renders intervals

**start**
`(delay?: number) => void`
Start (or resume) re-renders intervals at defined delay (if not passed delay arg it will be used from props). Good way to change delay time when needed.
