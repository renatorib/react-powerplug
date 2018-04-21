# compose

The compose utility is a factory version of [Compose](/docs/components/Compose.md) component.

```js
import { compose, Counter, Toggle } from 'react-powerplug' // note lowercased (c)ompose

// the order matters
const ToggleCounter = compose(
  <Counter initial={5} />, // accept a element
  Toggle,                  // or just a component
)

<ToggleCounter>
  {(counter, toggle) => {
    // counter.inc, counter.dec, counter.count
    // toggle.on, toggle.toggle, etc.
  }}
</ToggleCounter>
```

---

Behind the scenes, that's what happens:

```jsx
<Counter initial={5}>
  {counter => (
    <Toggle>
      {toggle => (
        /* ... */
      )}
    </Toggle>
  )}
</Counter>
```
