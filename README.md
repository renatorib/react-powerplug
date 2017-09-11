![react-powerplug](./logo.png)

[![npm](https://img.shields.io/npm/v/react-powerplug.svg?style=flat-square)](https://www.npmjs.com/package/react-powerplug)
[![npm](https://img.shields.io/npm/dt/react-powerplug.svg?style=flat-square)](https://www.npmjs.com/package/react-powerplug)
[![GitHub issues](https://img.shields.io/github/issues/renatorib/react-powerplug.svg?style=flat-square)](https://github.com/renatorib/react-powerplug/issues)
[![GitHub stars](https://img.shields.io/github/stars/renatorib/react-powerplug.svg?style=flat-square)](https://github.com/renatorib/react-powerplug/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/renatorib/react-powerplug.svg?style=social&style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/renatorib/react-powerplug)

:electric_plug: Give life to your Dumb Components.  

React PowerPlug is a *Just add water™* set of components to you add different types of state in your dumb components. It create e state and pass a function to children with state values and setters/modifiers, so you can handle your data/callbacks in dumb components.

It's has been created to (but not limited to) use with storybook, react styleguidist, documentations, etc.

[Play with live Toggle example on CodeSandbox](https://codesandbox.io/s/jp890p2x7w)

```jsx
import { Toggle } from 'react-powerplug'
import Checkbox from './MyDumbCheckbox'

<Toggle initial={true}>
  {({ on, toggle }) => (
    <Checkbox checked={on} onChange={toggle} />
  )}
</Toggle>
```

# Components

*Note: This is a cheat sheet for fast search.*  
*If you want a more detailed **API Reference** and examples for each component see the [Docs](docs/README.md)*

## [State](docs/componentes/State.md)
*Props:* `{ initial = {} }`  
*Args:* `{ state, setState }`

## [Toggle](docs/componentes/Toggle.md)
*Props:* `{ initial = false }`  
*Args:* `{ on, off, toggle, setOn }`

## [Counter](docs/componentes/Counter.md)
*Props:* `{ initial = 0 }`  
*Args:* `{ count, inc, dec }`

## [Set](docs/componentes/Set.md)
*Props:* `{ initial = {} }`  
*Args:* { `set`, `get`, `values` }

## [List](docs/componentes/List.md)
*Props:* `{ initial = [] }`  
*Args:* `{ list, push, pull, sort, setList }`

## [Bind](docs/componentes/Bind.md)
*Props:* `{ initial = '' }`  
*Args:* `{ value, setValue, bind }`   

## [Compose](docs/componentes/Compose.md)
*Props:* `{ states }`
*Args:* *depends on states* see below


# Composing Components

If you want to merge two of more components functionalities, you can compose they.  
For complete guide [see Compose docs](docs/components/Compose.md)

```jsx
import { compose } from 'react-powerplug'

const ToggleCounter = compose(<Toggle initial={true}>, <Counter initial={2}>)

<ToggleCounter>
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
</ToggleCounter>
``` 

Also, you can use a built-in Compose component and pass components on `states` prop

```jsx
import { Compose } from 'react-powerplug'

<Compose states={[<Toggle initial={true}>, <Counter initial={2}>]}>
  {({ on, toggle, count, inc, dec }) => <ProductCard {...} />}
</Compose>
``` 

It is the same to do this:

```jsx
<Counter initial={true}>
  {({ count, inc, dec }) => (
    <Toggle initial={2}>
      {({ on, toggle }) => (
        <ProductCard
          {...productInfo}
          isFavorited={on}
          onFavorite={toggle}
          count={count}
          onAdd={inc}
          onRemove={dec}
        />
      )}
    </Toggle>
  )}
</Counter>
```

Because of this, when you use `toggle` function, only `<Toggle>` will be rerendered, but if you use `inc` or `dec` functions, both `<Counter>` and `<Toggle>` will be rerendered. Even using `compose()` utility.

# Contribute

You can help improving this project sending PRs and helping with issues.
Also you ping me at [Twitter](http://twitter.com/renatorib_)
