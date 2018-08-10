# Counter

The Counter component is used for when it's necessary to count something. For example in a CartItem component, when you need to add more or remove product items count.

```js
import { Counter } from 'react-powerplug'
```

```jsx
<Counter initial={0}>
  {({ count, inc, dec }) => (
    <CartItem
      productName="Lorem ipsum"
      unitPrice={19.9}
      count={count}
      onAdd={inc}
      onRemove={dec}
    />
  )}
</Counter>
```

## Counter Props

**initial = 0** _(optional)_  
Specifies the initial count state, must be an number.
By default, the initial count state is 0.

**onChange** _(optional)_  
The onChange event of the Counter is called whenever the count state changes.

## Counter Children Props

TL;DR: `{ count, inc, dec }`

**count**  
`number`  
Your count state

**inc**  
`(value: number = 1) => void`  
Increase your count state by `value`.  
The default `value` is 1, so you can omit argument if you want.

```js
inc(2) // will increase count by 2
inc(1) // will increase count by 1
inc() // will increase count by 1
```

**dec**  
`(value: number = 1) => void`  
Decrease your count state by `value`.  
The default `value` is 1, so you can omit argument if you want.

```js
dec(2) // will decrease count by 2
dec(1) // will decrease count by 1
dec() // will decrease count by 1
```

**reset**  
`() => void`  
Reset value to initial
