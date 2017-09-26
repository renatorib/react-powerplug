# Hover

The Hover component is used to known when user is hovering some element.  
It's the same as `:hover` pseudo selector from css.

```js
import { Hover } from 'react-powerplug'
``` 

```jsx
<Hover>
  {({ isHover, bindHover }) => (
    <div {...bindHover}>
      You are {isHover ? 'hovering' : 'not hovering'} this div.
    </div>
  )}
</Hover>
``` 

## Hover Props

*Don't have props*

## Hover Children Props

TL;DR: `{ isHover, bindHover }`

**isHover**  
`boolean`  
True if is hovering the binded element

**bindHover**  
`{ onMouseEnter: () => void, onMouseLeave: () => void }`  
There are the bind event functions that make `Hover` works.  
You **must** bind some element to track their events.  
You can use spread operator to bind effectively an element.

```jsx
<span {...bindHover}>Binded!</span>
```
