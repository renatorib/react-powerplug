# Compose

The Compose component is a special component to you 'merge' two or more components functionalities. You can, for example, combine Toggle and Counter in a single component and use both power together.

```js
import { Compose, Toggle, Counter } from 'react-powerplug'
```

```jsx
<Compose states={[<Counter />, <Toggle initial={false} />]}>
  {(counter, toggle) => (
    <ProductCard
      {...productInfo}
      isFavorited={toggle.on}
      onFavorite={toggle.toggle}
      count={counter.count}
      onAdd={counter.inc}
      onRemove={counter.dec}
    />
  )}
</Compose>
```

In addition you can use a utility to create a Composed component

```js
import { compose } from 'react-powerplug' // note lowercased (c)ompose

const ToggleCounter = compose(
  <Counter initial={5} />,
  <Toggle initial={false} />
)
```

```jsx
<ToggleCounter>
  {(counter, toggle) => (...)}
</ToggleCounter>
```

## Compose Props

**states** _(required)_  
Set an array of React PowerPlug components (instance elements, not types) to compose.

Note: if you use `compose` utility to create Composed components, you don't
need to pass an array, just pass by arguments: `compose(<Foo />, <Bar />, <Baz />)`

## Compose Children Props

The render props function provided will receive n arguments, each of them being
the arguments provided by the corresponding component in the list.



