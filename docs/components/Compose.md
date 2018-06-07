# Compose

The Compose component is a special component to you 'merge' two or more components functionalities. You can, for example, combine Toggle and Counter in a single component and use both power together.

```js
import { Compose, Toggle, Counter } from 'react-powerplug'
```

```jsx
<Compose components={[Counter, Toggle]}>
  {(counter, toggle) => (
    <ProductCard
      {...productInfo}
      favorite={toggle.on}
      onFavorite={toggle.toggle}
      count={counter.count}
      onAdd={counter.inc}
      onRemove={counter.dec}
    />
  )}
</Compose>
```

If you need to pass props, especially for `initial`, just pass a created element. Internals this will be cloned.

```jsx
<Compose components={[Counter, <Toggle initial={false} />]}>
  {(counter, toggle) => (/* ... */)}
</Compose>
```

Also, you can use a built-in Compose component and pass components on `components` prop

```jsx
<Compose components={[Toggle, Counter]}>
  {(toggle, counter) => (
    <ProductCard {...} />
  )}
</Compose>
```

In addition you can use `compose()` utility to create a Composed component.  
[See docs](/docs/utils/compose.md)

---

Behind the scenes, that's what happens:

```jsx
<Counter initial={5}>
  {counter => (
    <Toggle initial={false}>
      {toggle => (
        <ProductCard
          {...productInfo}
          favorite={toggle.on}
          onFavorite={toggle.toggle}
          count={counter.count}
          onAdd={counter.inc}
          onRemove={counter.dec}
        />
      )}
    </Toggle>
  )}
</Counter>
```

## Compose Props

**components** _(required)_  
Set an array of React PowerPlug components (instance elements, not types) to compose.

## Compose Children Props

The render props function provided will receive n arguments, each of them being
the arguments provided by the corresponding component in the list.
