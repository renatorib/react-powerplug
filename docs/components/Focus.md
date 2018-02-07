# Focus

The Focus component is used to known when user is focusing some element.  
It's the same as `:focus` pseudo selector from css.

```js
import { Focus } from 'react-powerplug'
```

```jsx
<Focus>
  {({ isFocus, bindFocus }) => (
    <div>
      <input {...bindFocus} placeholder="Focus me" />
      <div>You are {isFocus ? 'focusing' : 'not focusing'} the input.</div>
    </div>
  )}
</Focus>
```

## Focus Props

_Don't have props_

## Focus Children Props

TL;DR: `{ isFocus, bindFocus }`

**isFocus**  
`boolean`  
True if is focusing the binded element

**bindFocus**  
`{ onFocusIn: () => void, onFocusOut: () => void }`  
There are the bind event functions that make `Focus` works.  
You **must** bind some element to track their events.  
You can use spread operator to bind effectively an element.

```jsx
<button {...bindFocus}>Binded!</button>
```
