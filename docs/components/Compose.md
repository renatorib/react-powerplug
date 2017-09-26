# Compose

The Compose component is a special component to you 'merge' two or more components functionalities. You can, for example, combine Toggle and Counter in a single component and use both power together.

```js
import { Compose, Toggle, Counter } from 'react-powerplug'
``` 

```jsx
<Compose states={[<Counter />, <Toggle initial={false} />]}>
  {({ count, inc, dec, on, toggle }) => (
    <ProductCard
      {...productInfo}
      isFavorited={on}
      onFavorite={toggle}
      count={count}
      onAdd={inc}
      onRemove={dec}
    />
  )}
</Compose>
``` 

In addition you can use a utility to create a Composed component

```js
import { compose } from 'react-powerplug' // note lowercased (c)ompose

const ToggleCounter = compose(<Counter initial={5} />, <Toggle initial={false} />)
```

```jsx
<ToggleCounter>
  {({ count, inc, dec, on, toggle }) => (...)}
</ToggleCounter>
```


## Compose Props

**states** *(required)*  
Set an array of React PowerPlug components (instance elements, not types) to compose.  

Note: if you use `compose` utility to create Composed components, you don't
need to pass an array, just pass by arguments: `compose(<Foo />, <Bar />, <Baz />)`

## Compose Children Props

Depends on your choices.  
Will be all children props merged from your passed components.  

## Known Issues

React PowerPlug still does not deal with name conflicts.  
Sorry fot that, but PRs are welcome!
