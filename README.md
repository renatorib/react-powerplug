<p align="center">
  <img src="./logo.png" alt="react-powerplug" />
</p>

<h1 align="center"></h1>

<br />

> This branch is **unstable** and is in **active development**.  
> To the latest stable version go to [0.1-stable branch](https://github.com/renatorib/react-powerplug/tree/0.1-stable)

[![npm](https://img.shields.io/npm/v/react-powerplug.svg?style=flat-square)](https://www.npmjs.com/package/react-powerplug)
[![npm](https://img.shields.io/npm/dt/react-powerplug.svg?style=flat-square)](https://www.npmjs.com/package/react-powerplug)
[![GitHub issues](https://img.shields.io/github/issues/renatorib/react-powerplug.svg?style=flat-square)](https://github.com/renatorib/react-powerplug/issues)
[![GitHub stars](https://img.shields.io/github/stars/renatorib/react-powerplug.svg?style=flat-square)](https://github.com/renatorib/react-powerplug/stargazers)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/renatorib/react-powerplug.svg?style=social&style=flat-square)](https://twitter.com/intent/tweet?url=https://github.com/renatorib/react-powerplug)

:electric_plug: Renderless Pluggable State Containers

---

**React PowerPlug is a set of pluggable renderless components** that provides different types of state and logics so you can use with your dumb components. It creates a state and pass down the logic to the children, so you can handle your data/callbacks.

It's has been created to (but not limited to) use with **storybook, react styleguidist, documentations, prototypes**. You can also use to create a bunch of uncontrolled components where the outside app don't care about your state, for example a menu dropdown.

### Quick examples:

```jsx
import { State, Toggle } from 'react-powerplug'
import { Pagination, Tabs, Checkbox } from './MyDumbComponents'

<State initial={{ offset: 0, limit: 10, totalCount: 200 }}>
  {({ state, setState }) => (
    <Pagination {...state} onChange={(offset) => setState({ offset })} />
  )}
</State>

<Toggle initial={true}>
  {({ on, toggle }) => (
    <Checkbox checked={on} onChange={toggle} />
  )}
</Toggle>

// You can also use a `render` prop instead

<Toggle
  initial={false}
  render={({ on, toggle }) => (
    <Checkbox checked={on} onChange={toggle}>
  )}
/>
```

# Renderless Components

Note: Also known as `render props` or `children as function`.  
For most people, this may look pretty weird. **But it's extremely powerful**. Usually you render some element whitin your component, but if you are creating an 'agnostic' component or a kind of abstraction component you can not simply render elements, you don't know what the user wants to render. So you render values, actions, states, data... props. You pick these props passing a function to children (or render prop) and now with this data you have total control of what you want to do. Now render what you want to render and do what you want to do. **Renderless components are about abstracting some logic without any UI.**

React PowerPlug brings to you a bunch of components that act as state and logic containers, so you can get this powerful abstraction and use it any way you want.

**Note:** with PowerPlug you can use `children` or `render` prop.  
You decide which one is best for you.

# Components

**_Note:_** _This is a kind of a cheat sheet for fast search._  
_If you want a more detailed **API Reference** and examples for each component see the [Docs](/docs)_

## State Containers

### State

**Component Props:** `{ initial, onChange }`  
**Render Props:** `{ state, setState }`  
[see docs](docs/components/State.md)

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

### Toggle

**Component Props:** `{ initial, onChange }`  
**Render Props:** `{ on, off, toggle, setOn }`  
[see docs](docs/components/Toggle.md)

```jsx
<Toggle initial={true}>
  {({ on, toggle }) => <Checkbox checked={on} onChange={toggle} />}
</Toggle>
```

### Loading

**Component Props:** `{ initial, onChange }`  
**Render Props:** `{ isLoading, toggle, setLoading }`  
[see docs](docs/components/Loading.md)

```jsx
<Loading initial={false}>
  {({ isLoading, toggleLoading }) => (
    <Button onClick={toggleLoading}>
      {isLoading ? 'Loading...' : 'Click me'}
    </Button>
  )}
</Loading>
```

### Value

**Component Props:** `{ initial, onChange }`  
**Render Props:** `{ value, setValue }`  
[see docs](docs/components/Value.md)

```jsx
<Value initial="React">
  {({ value, setValue }) => (
    <Select
      label="Choose one"
      options={['React', 'Preact', 'Vue']}
      value={value}
      onChange={setValue}
    />
  )}
</Value>
```

### Map

**Component Props:** `{ initial, onChange }`  
**Render Props:** `{ set, get, values }`  
[see docs](docs/components/Map.md)

```jsx
<Map initial={{ sounds: true, graphics: 'medium' }}>
  {({ set, get }) => (
    <Maptings>
      <ToggleCheck checked={get('sounds')} onChange={c => set('sounds', c)}>
        Game Sounds
      </ToggleCheck>
      <Select
        label="Graphics"
        options={['low', 'medium', 'high']}
        selected={get('graphics')}
        onSelect={value => set('graphics', value)}
      />
    </Maptings>
  )}
</Map>
```

### List

**Component Props:** `{ initial, onChange }`  
**Render Props:** `{ list, push, pull, sort, setList }`  
[see docs](docs/components/List.md)

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

## Feedback Containers

### Hover

**Component Props:** `{ onChange }`  
**Render Props:** `{ isHover, bindHover }`  
[see docs](docs/components/Hover.md)

```jsx
<Hover>
  {({ isHover, bindHover }) => (
    <div {...bindHover}>
      You are {isHover ? 'hovering' : 'not hovering'} this div.
    </div>
  )}
</Hover>
```

### Active

**Component Props:** `{ onChange }`  
**Render Props:** `{ isActive, bindActive }`  
[see docs](docs/components/Active.md)

```jsx
<Active>
  {({ isActive, bindActive }) => (
    <div {...bindActive}>
      You are {isActive ? 'clicking' : 'not clicking'} this div.
    </div>
  )}
</Active>
```

### Focus

**Component Props:** `{ onChange }`  
**Render Props:** `{ isFocus, bindFocus }`  
[see docs](docs/components/Focus.md)

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

### Touch

**Component Props:** `{ onChange }`  
**Render Props:** `{ isTouched, bind }`  
[see docs](docs/components/Touch.md)

```jsx
<Touch>
  {({ isTouched, bind }) => (
    <div {...bind}>
      You are {isTouched ? 'touching' : 'not touching'} this div.
    </div>
  )}
</Touch>
```

## Form Containers

### Input

**Component Props:** `{ initial, onChange, getValue }`  
**Render Props:** `{ value, set, bind }`  
[see docs](docs/components/Input.md)

```jsx
<Input initial="hello world">
  {({ bind, value }) => (
    <div>
      <ControlledInput {...bind} />
      <div>You typed {value}</div>
    </div>
  )}
</Input>
```

### Form

**Component Props:** `{ initial, onChange, getValue }`  
**Render Props:** `{ input }`  
[see docs](docs/components/Form.md)

```jsx
<Form initial={{ subject: '', message: '' }}>
  {({ input }) => {
    const subject = input('subject')
    const message = input('message')

    return (
      <div>
        <ControlledInput
          placeholder="Subject"
          {...subject.bind}
        />
        <ControlledTextArea
          placeholder="Message"
          {...message.bind}
        />
        <Submit>Send</Submit>

        {/*
          input(id) => { bind, set, value }
        */}
      </div>
    )
  }
</Form>
```

# Composing Components

If you want to merge two of more components functionalities, you can compose they in a single one.  
For complete guide [see Compose docs](docs/components/Compose.md)

```jsx
import { compose } from 'react-powerplug'

const ToggleCounter = compose(Toggle, Counter)

<ToggleCounter>
  {({ toggle, on }, { count, inc, dec }) => (
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

If you need to pass props, especially for `initial`, just pass a created element. Internals this will be cloned.

```jsx
const ToggleCounter = compose(
  <Toggle initial={false} />,
  <Counter initial={2} />
)

// or just mix it
const ToggleCounter = compose(Toggle, <Counter initial={3} />)
```

Also, you can use a built-in Compose component and pass components on `states` prop

```jsx
import { Compose } from 'react-powerplug'

<Compose states={[Toggle, Counter]}>
  {(toggle, counter) => (
    <ProductCard {...} />
  )}
</Compose>
```

Behind the scenes, that's what happens:

```jsx
<Counter /* passed props */>
  {counter => (
    <Toggle /* passed props */>
      {toggle => (
        <ProductCard
          {...productInfo}
          isFavorited={toggle.on}
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

Because of that, when you use `toggle` function, only `<Toggle>` will be rerendered, but if you use `inc` or `dec` functions, both `<Counter>` and `<Toggle>` will be rerendered. **Even** using `compose()` utility.

# CodeSandbox examples

[Using Toggle in a Checkbox](https://codesandbox.io/s/jp890p2x7w)  
[Using State in a Pagination](https://codesandbox.io/s/8x9m4893l2)

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
Also you can ping me at [Twitter](http://twitter.com/renatorib_)
