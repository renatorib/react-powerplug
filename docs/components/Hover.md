# Hover

The Hover component is used to known when user is hovering some element.  
It's the same as `:hover` pseudo selector from css.

```js
import { Hover } from 'react-powerplug'
```

```jsx
<Hover>
  {({ hovered, bind }) => (
    <div {...bind}>
      You are {hovered ? 'hovering' : 'not hovering'} this div.
    </div>
  )}
</Hover>
```

## Hover Props

**onChange** _(optional)_  
The onChange event of the Hover is called whenever the hovered state changes.

## Hover Children Props

TL;DR: `{ hovered, bind }`

**hovered**  
`boolean`  
True if is hovering the binded element

**bind**  
`{ onMouseEnter: () => void, onMouseLeave: () => void }`  
There are the bind event functions that make `Hover` works.  
You **must** bind some element to track their events.  
You can use spread operator to bind effectively an element.

```jsx
<span {...bind}>Binded!</span>
```
