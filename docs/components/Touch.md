# Touch

The Touch component is used to known when user is touching some element.

```js
import { Touch } from 'react-powerplug'
```

```jsx
<Touch>
  {({ touched, bind }) => (
    <div {...bind}>
      You are {touched ? 'touching' : 'not touching'} this div.
    </div>
  )}
</Touch>
```

## Touch Props

**onChange** _(optional)_  
The onChange event of the Touch is called whenever the touched state changes.

## Touch Children Props

TL;DR: `{ touched, bind }`

**touched**  
`boolean`  
True if is touching the binded element

**bind**  
`{ onTouchStart: () => void, onTouchEnd: () => void }`  
There are the bind event functions that make `Touch` works.  
You **must** bind some element to track their events.  
You can use spread operator to bind effectively an element.

```jsx
<span {...bind}>Binded!</span>
```
