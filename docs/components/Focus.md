# Focus

The Focus component is used to known when user is focusing some element.  
It's the same as `:focus` pseudo selector from css.

```js
import { Focus } from 'react-powerplug'
```

```jsx
<Focus>
  {({ focused, bind }) => (
    <div>
      <input {...bind} placeholder="Focus me" />
      <div>You are {focused ? 'focusing' : 'not focusing'} the input.</div>
    </div>
  )}
</Focus>
```

## Focus Props

**onChange** _(optional)_  
The onChange event of the Focus is called whenever the focused state changes.

## Focus Children Props

TL;DR: `{ focused, bind }`

**focused**  
`boolean`  
True if is focusing the binded element

**bind**  
`{ onFocusIn: () => void, onFocusOut: () => void }`  
There are the bind event functions that make `Focus` works.  
You **must** bind some element to track their events.  
You can use spread operator to bind effectively an element.

```jsx
<button {...bind}>Binded!</button>
```
