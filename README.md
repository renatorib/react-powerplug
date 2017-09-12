![react-powerplug](./logo.png)

[![npm](https://img.shields.io/npm/v/react-powerplug.svg?style=flat-square)](https://www.npmjs.com/package/react-powerplug)
[![npm](https://img.shields.io/npm/dt/react-powerplug.svg?style=flat-square)](https://www.npmjs.com/package/react-powerplug)
[![GitHub issues](https://img.shields.io/github/issues/renatorib/react-powerplug.svg?style=flat-square)](https://github.com/renatorib/react-powerplug/issues)
[![GitHub stars](https://img.shields.io/github/stars/renatorib/react-powerplug.svg?style=flat-square)](https://github.com/renatorib/react-powerplug/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/renatorib/react-powerplug.svg?style=social&style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/renatorib/react-powerplug)

:electric_plug: Give life to your Dumb Components.  

**React PowerPlug is a *Just add water™*** set of **function as children components** that add different types of state logics in your dumb components. It creates a state and pass down the logic to the children, so you can handle your data/callbacks in dumb components.

It's has been created to (but not limited to) use with **storybook, react styleguidist, documentations, etc**. because it's the most common use case. Otherwise you can use in your normal components too, for example a Dropdown that needs to know if opened or not, and others cases.  

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

***Note:*** *This is a kind of a cheat sheet for fast search.*  
*If you want a more detailed **API Reference** and examples for each component see the [Docs](docs/README.md)*

## [State](docs/components/State.md)
**Props:** `{ initial }`  
**Args:** `{ state, setState }`

```jsx
<State initial={{ isLoading: false, data: null }}>
  {({ state, setState }) => (
    <DataReceiver
      data={state.data}
      onStart={() => setState({ isLoading: true })}
      onFinish={data => setState({ data, isLoading: false })}
    />
  )}
</State>
```

## [Toggle](docs/components/Toggle.md)
**Props:** `{ initial }`  
**Args:** `{ on, off, toggle, setOn }`

```jsx
<Toggle initial={true}>
  {({ on, toggle }) => (
    <Checkbox checked={on} onChange={toggle} />
  )}
</Toggle>
```

## [Counter](docs/components/Counter.md)
**Props:** `{ initial }`  
**Args:** `{ count, inc, dec }`

```jsx
<Counter initial={0}>
  {({ count, inc, dec }) => (
    <CartItem
      productName="Lorem ipsum"
      unitPrice={19.90}
      count={count}
      onAdd={inc}
      onRemove={dec}
    />
  )}
</Counter>
```

## [Set](docs/components/Set.md)
**Props:** `{ initial }`  
**Args:** `{ set, get, values }`

```jsx
<Set initial={{ sounds: true, graphics: 'medium' }}>
  {({ set, get }) => (
    <Settings>
      <ToggleCheck checked={get('sounds')} onChange={c => set('sounds', c)}>
        Game Sounds
      </ToggleCheck>
      <Select
        label="Graphics"
        options={['low', 'medium', 'high']}
        selected={get('graphics')}
        onSelect={value => set('graphics', value)}
      />
    </Settings>
  )}
</Set>
```

## [List](docs/components/List.md)
**Props:** `{ initial }`  
**Args:** `{ list, push, pull, sort, setList }`

```jsx
<List initial={['react', 'babel']}>
  {({ list, pull, push }) => (
    <div>
      <FormInput onSubmit={push} />
      {list.map(tag => (
        <Tag onRemove={() => pull(value => value === tag)}>
          {tag}
        </Tag>
      )}
    </div>
  )}
</List>
```

## [Bind](docs/components/Bind.md)
**Props:** `{ initial, getter }`  
**Args:** `{ value, setValue, bind }`   

```jsx
<Bind initial="hello world">
  {({ bind, value }) => (
    <div>
      <ControlledInput {...bind} />
      <div>You typed {value}</div>
    </div>
  )}
</Bind>
```

## [Compose](docs/components/Compose.md)
**Props:** `{ states }`  
**Args:** *depends on passed states*

For an example, see below.


# Composing Components

If you want to merge two of more components functionalities, you can compose they.  
For complete guide [see Compose docs](docs/components/Compose.md)

```jsx
import { compose } from 'react-powerplug'

const ToggleCounter = compose(<Toggle initial={true} />, <Counter initial={2} />)

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

<Compose states={[<Toggle initial={true} />, <Counter initial={2} />]}>
  {({ on, toggle, count, inc, dec }) => (
    <ProductCard {...} />
  )}
</Compose>
``` 

It is the same to do this:

```jsx
<Counter initial={2}>
  {({ count, inc, dec }) => (
    <Toggle initial={true}>
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

# Install

### Node Module
```
yarn add react-powerplug
```
```
npm i react-powerplug
```

### UMD library
```html
<script src="https://unpkg.com/react-powerplug/dist/react-powerplug.min.js"></script>
```
exposed as `ReactPowerPlug`

# Contribute

You can help improving this project sending PRs and helping with issues.  
Also you ping me at [Twitter](http://twitter.com/renatorib_)
