<h1 align="center">
  <img src="/logo.png" alt="React PowerPlug" />
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react-powerplug" target="_blank">
    <img src="https://img.shields.io/npm/dt/react-powerplug.svg?style=flat-square" alt="npm" />
  </a>
  <a href="https://github.com/renatorib/react-powerplug/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/renatorib/react-powerplug.svg?style=flat-square" alt="stars" />
  </a>
  <a href="https://twitter.com/intent/tweet?url=https://github.com/renatorib/react-powerplug" target="_blank">
    <img src="https://img.shields.io/twitter/url/https/github.com/renatorib/react-powerplug.svg?style=flat-square" alt="tweet" />
  </a>
</p>

<br />
 
 > **React PowerPlug is a set of pluggable renderless components and helpers** that provides different types of state and logics so you can use with your dumb components. It creates a state and pass down the logic to the children, so you can handle your data. Read about [Render Props](https://reactjs.org/docs/render-props.html) pattern.
 
 
## Highlights
- :ok_hand: Dependency free
- :electric_plug: Plug and play
- :crystal_ball: Tree shaking friendly (ESM, no side effects)
- :package: Super tiny (~4kb)
- :books: Well documented
- :beers: Bunch of awesome utilities

<details>
  <summary>See quick examples</summary>

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
    <Checkbox checked={on} onChange={toggle} />
  )}
/>
```

</details>

## ⚠️ Master is unstable

> This branch is **unstable** and is in **active development**.  
> For the latest stable version go to [0.1-stable branch](https://github.com/renatorib/react-powerplug/tree/0.1-stable)

## Components

> **_Note_** _This is a kind of a cheat sheet for fast search._  
> _If you want a more detailed **API Reference** and examples for each component see [full docs](/docs)_

| Component                    | Component Props         | Render Props                                   |                                                                             |
| ---------------------------- | ----------------------- | ---------------------------------------------- | --------------------------------------------------------------------------- |
| <h6>STATE CONTAINERS</h6>    |
| **\<State>**                 | `{ initial, onChange }` | `{ state, setState }`                          | [:point_down:](#state) [:books:](docs/components/State.md)                  |
| **\<Toggle>**                | `{ initial, onChange }` | `{ on, toggle, set }`                          | [:point_down:](#toggle) [:books:](docs/components/Toggle.md)                |
| **\<Counter>**               | `{ initial, onChange }` | `{ count, inc, dec, incBy, decBy, set }`       | [:point_down:](#counter) [:books:](docs/components/Counter.md)              |
| **\<Value>**                 | `{ initial, onChange }` | `{ value, setValue, set }`                     | [:point_down:](#value) [:books:](docs/components/Value.md)                  |
| **\<Map>**                   | `{ initial, onChange }` | `{ set, get, over, values }`                   | [:point_down:](#map) [:books:](docs/components/Map.md)                      |
| **\<Set>**                   | `{ initial, onChange }` | `{ values, add, clear, remove, has }`          | [:point_down:](#set) [:books:](docs/components/Set.md)                      |
| **\<List>**                  | `{ initial, onChange }` | `{ list, first, last, push, pull, sort, set }` | [:point_down:](#list) [:books:](docs/components/List.md)                    |
| <h6>FEEDBACK CONTAINERS</h6> |
| **\<Hover>**                 | `{ onChange }`          | `{ isHovered, bind }`                          | [:point_down:](#hover) [:books:](docs/components/Hover.md)                  |
| **\<Active>**                | `{ onChange }`          | `{ isActive, bind }`                           | [:point_down:](#active) [:books:](docs/components/Active.md)                |
| **\<Focus>**                 | `{ onChange }`          | `{ isFocused, bind }`                          | [:point_down:](#focus) [:books:](docs/components/Focus.md)                  |
| **\<Touch>**                 | `{ onChange }`          | `{ isTouched, bind }`                          | [:point_down:](#touch) [:books:](docs/components/Touch.md)                  |
| **\<FocusManager>**          | `{ onChange }`          | `{ isFocused, blur, bind }`                    | [:point_down:](#focusmanager) [:books:](docs/components/FocusManager.md)    |
| <h6>FORM CONTAINERS</h6>     |
| **\<Input>**                 | `{ initial, onChange }` | `{ set, value, bind }`                         | [:point_down:](#input) [:books:](docs/components/Input.md)                  |
| **\<Form>**                  | `{ initial, onChange }` | `{ input, values }`                            | [:point_down:](#form) [:books:](docs/components/Form.md)                    |
| <h6>OTHER</h6>               |
| **\<Interval>**              | `{ delay }`             | `{ stop, start, toggle }`                      | [:point_down:](#interval) [:books:](docs/components/Interval.md)            |
| **\<Compose>**               | `{ components }`        | _depends on components prop_                   | [:point_down:](#composing-components) [:books:](docs/components/Compose.md) |

## Utilities

| Name                          |                                        |
| ----------------------------- | -------------------------------------- |
| compose(...components)        | [:books:](docs/utils/compose.md)       |
| composeEvents(...objOfEvents) | [:books:](docs/utils/composeEvents.md) |

## Examples

#### State

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

#### Toggle

```jsx
<Toggle initial={true}>
  {({ on, toggle }) => <Checkbox checked={on} onChange={toggle} />}
</Toggle>
```

#### Counter

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

#### Value

```jsx
<Value initial="React">
  {({ value, setValue }) => (
    <Select
      label="Choose one"
      options={['React', 'Angular', 'Vue']}
      value={value}
      onChange={setValue}
    />
  )}
</Value>
```

#### Map

```jsx
<Map initial={{ sounds: true, graphics: 'medium' }}>
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
</Map>
```

#### Set

```jsx
<Set initial={['react', 'babel']}>
  {({ values, remove, add }) => (
    <TagManager>
      <FormInput onSubmit={add} />
      {values.map(tag => (
        <Tag onRemove={() => remove(tag)}>{tag}</Tag>
      )}
    </TagManager>
  )}
</Set>
```

#### List

```jsx
<List initial={['Buy new shoes']}>
  {({ list, pull, push }) => (
    <Todo>
      <TodoFormInput onSubmit={push} />
      {list.map(todo => (
        <TodoItem onDelete={() => pull(i => i === todo)}>
          {todo}
        </TodoItem>
      )}
    </Todo>
  )}
</List>
```

#### Hover

```jsx
<Hover>
  {({ isHovered, bind }) => (
    <div {...bind}>
      You are {isHovered ? 'hovering' : 'not hovering'} this div.
    </div>
  )}
</Hover>
```

#### Active

```jsx
<Active>
  {({ isActive, bind }) => (
    <div {...bind}>
      You are {isActive ? 'clicking' : 'not clicking'} this div.
    </div>
  )}
</Active>
```

#### Touch

```jsx
<Touch>
  {({ isTouched, bind }) => (
    <div {...bind}>
      You are {isTouched ? 'touching' : 'not touching'} this div.
    </div>
  )}
</Touch>
```

#### Focus

```jsx
<Focus>
  {({ isFocused, bind }) => (
    <div>
      <input {...bind} placeholder="Focus me" />
      <div>You are {isFocused ? 'focusing' : 'not focusing'} input.</div>
    </div>
  )}
</Focus>
```

#### Input

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

#### Form

```jsx
<Form initial={{ subject: '', message: '' }}>
  {({ input, values }) => (
    <form
      onSubmit={e => {
        e.preventDefault()
        console.log(values)
      }}
    >
      <ControlledInput placeholder="Subject" {...input('subject').bind} />
      <ControlledTextArea placeholder="Message" {...input('message').bind} />
      <Submit>Send</Submit>

      {/*
                                                                                                              input(id) => { bind, set, value }
                                                                                                            */}
    </form>
  )}
</Form>
```

### Interval

```jsx
<Interval delay={1000}>
  {({ stop, start }) => (
    <>
      <div>The time is now {new Date().toLocaleTimeString()}</div>
      <button onClick={() => stop()}>Stop interval</button>
      <button onClick={() => start()}>Start interval</button>
    </>
  )}
</Interval>
```

# Composing Components

If you want to avoid 'render props hell' you can compose two or more components in a single one.  
**[:books: For complete guide, see docs](docs/components/Compose.md)**

```jsx
import { Compose } from 'react-powerplug'

<Compose components={[Toggle, Counter]}>
  {(toggle, counter) => (/* ... */)}
</Compose>
```

```jsx
import { compose } from 'react-powerplug'

const ToggleCounter = compose(
  <Counter initial={5} />,
  <Toggle initial={false} />
)

<ToggleCounter>
  {(toggle, counter) => (
    <ProductCard {...} />
  )}
</ToggleCounter>
```

---

<p align="center">
  <a href="https://egghead.io/lessons/react-rapid-prototyping-with-react-powerplug" target="_blank">
    <img src="https://user-images.githubusercontent.com/3277185/37249517-cde30352-24c7-11e8-8f3a-614e2162784d.png" alt="Watch 'Rapid Prototyping with React PowerPlug' by Andrew Del Prete on egghead.io" />
  </a>
</p>

---

# Install

### Node Module

```
yarn add react-powerplug
```

```
npm i react-powerplug
```

### UMD

```html
<script src="https://unpkg.com/react-powerplug/dist/react-powerplug.min.js"></script>
```

exposed as `ReactPowerPlug`

# Contribute

You can help improving this project sending PRs and helping with issues.  
Also you can ping me at [Twitter](http://twitter.com/renatorib_)
