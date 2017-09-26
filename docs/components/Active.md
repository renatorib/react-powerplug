# Active

The Active component is used to known when user is clicking (holding) some element.  
It's the same as `:active` pseudo selector from css.

```js
import { Active } from 'react-powerplug'
``` 

```jsx
<Active>
  {({ isActive, bindActive }) => (
    <div {...bindActive}>
      You are {isActive ? 'clicking' : 'not clicking'} this div.
    </div>
  )}
</Active>
``` 

## Active Props

*Don't have props*

## Active Children Props

TL;DR: `{ isActive, bindActive }`

**isActive**  
`boolean`  
True if is activated (being clicked) the binded element

**bindActive**  
`{ onMouseUp: () => void, onMouseDown: () => void }`  
There are the bind event functions that make `Active` works.  
You **must** bind some element to track their events.  
You can use spread operator to bind effectively an element.

```jsx
<span {...bindActive}>Binded!</span>
```
