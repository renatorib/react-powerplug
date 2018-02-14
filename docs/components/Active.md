# Active

The Active component is used to known when user is clicking (holding) some element.  
It's the same as `:active` pseudo selector from css.

```js
import { Active } from 'react-powerplug'
```

```jsx
<Active>
  {({ isActive, bind }) => (
    <div {...bind}>
      You are {isActive ? 'clicking' : 'not clicking'} this div.
    </div>
  )}
</Active>
```

## Active Props

_Don't have props_

## Active Children Props

TL;DR: `{ isActive, bind }`

**isActive**  
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
