# Active

The Active component is used to known when user is clicking (holding) some element.  
It's the same as `:active` pseudo selector from css.

```js
import { Active } from 'react-powerplug'
```

```jsx
<Active>
  {({ active, bind }) => (
    <div {...bind}>
      You are {active ? 'clicking' : 'not clicking'} this div.
    </div>
  )}
</Active>
```

## Active Props

**onChange** _(optional)_  
The onChange event of the Active is called whenever the active state changes.

## Active Children Props

TL;DR: `{ active, bind }`

**active**  
`boolean`  
True if is activated (being clicked) the binded element

**bind**  
`{ onMouseUp: () => void, onMouseDown: () => void }`  
There are the bind event functions that make `Active` works.  
You **must** bind some element to track their events.  
You can use spread operator to bind effectively an element.

```jsx
<span {...bind}>Binded!</span>
```
