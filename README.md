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
- :package: Super tiny (~3kb)
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
| **\<Value>**                 | `{ initial, onChange }` | `{ value, set }`                               | [:point_down:](#value) [:books:](docs/components/Value.md)                  |
| **\<Map>**                   | `{ initial, onChange }` | `{ set, get, over, values }`                   | [:point_down:](#map) [:books:](docs/components/Map.md)                      |
| **\<Set>**                   | `{ initial, onChange }` | `{ values, add, clear, remove, has }`          | [:point_down:](#set) [:books:](docs/components/Set.md)                      |
| **\<List>**                  | `{ initial, onChange }` | `{ list, first, last, push, pull, sort, set }` | [:point_down:](#list) [:books:](docs/components/List.md)                    |
| <h6>FEEDBACK CONTAINERS</h6> |
| **\<Hover>**                 | `{ onChange }`          | `{ hovered, bind }`                            | [:point_down:](#hover) [:books:](docs/components/Hover.md)                  |
| **\<Active>**                | `{ onChange }`          | `{ active, bind }`                             | [:point_down:](#active) [:books:](docs/components/Active.md)                |
| **\<Focus>**                 | `{ onChange }`          | `{ focused, bind }`                            | [:point_down:](#focus) [:books:](docs/components/Focus.md)                  |
| **\<Touch>**                 | `{ onChange }`          | `{ touched, bind }`                            | [:point_down:](#touch) [:books:](docs/components/Touch.md)                  |
| **\<FocusManager>**          | `{ onChange }`          | `{ focused, blur, bind }`                      | [:point_down:](#focusmanager) [:books:](docs/components/FocusManager.md)    |
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
<State initial={{ loading: false, data: null }}>
  {({ state, setState }) => (
    <DataReceiver
      data={state.data}
      onStart={() => setState({ loading: true })}
      onFinish={data => setState({ data, loading: false })}
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
  {({ value, set }) => (
    <Select
      label="Choose one"
      options={['React', 'Angular', 'Vue']}
      value={value}
      onChange={set}
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
      ))}
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
      ))}
    </Todo>
  )}
</List>
```

#### Hover

```jsx
<Hover>
  {({ hovered, bind }) => (
    <div {...bind}>
      You are {hovered ? 'hovering' : 'not hovering'} this div.
    </div>
  )}
</Hover>
```

#### Active

```jsx
<Active>
  {({ active, bind }) => (
    <div {...bind}>
      You are {active ? 'clicking' : 'not clicking'} this div.
    </div>
  )}
</Active>
```

#### Touch

```jsx
<Touch>
  {({ touched, bind }) => (
    <div {...bind}>
      You are {touched ? 'touching' : 'not touching'} this div.
    </div>
  )}
</Touch>
```

#### Focus

```jsx
<Focus>
  {({ focused, bind }) => (
    <div>
      <input {...bind} placeholder="Focus me" />
      <div>You are {focused ? 'focusing' : 'not focusing'} input.</div>
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

# Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/3277185?v=4" width="100px;"/><br /><sub><b>Renato Ribeiro</b></sub>](http://twitter.com/renatorib_)<br />[💻](https://github.com/renatorib/react-powerplug/commits?author=renatorib "Code") [🎨](#design-renatorib "Design") [📖](https://github.com/renatorib/react-powerplug/commits?author=renatorib "Documentation") [⚠️](https://github.com/renatorib/react-powerplug/commits?author=renatorib "Tests") | [<img src="https://avatars0.githubusercontent.com/u/5635476?v=4" width="100px;"/><br /><sub><b>Bogdan Chadkin</b></sub>](https://github.com/TrySound)<br />[💻](https://github.com/renatorib/react-powerplug/commits?author=TrySound "Code") [📖](https://github.com/renatorib/react-powerplug/commits?author=TrySound "Documentation") [⚠️](https://github.com/renatorib/react-powerplug/commits?author=TrySound "Tests") [🚇](#infra-TrySound "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars1.githubusercontent.com/u/2762082?v=4" width="100px;"/><br /><sub><b>Travis Arnold</b></sub>](http://travisrayarnold.com)<br />[💻](https://github.com/renatorib/react-powerplug/commits?author=souporserious "Code") [📖](https://github.com/renatorib/react-powerplug/commits?author=souporserious "Documentation") [🐛](https://github.com/renatorib/react-powerplug/issues?q=author%3Asouporserious "Bug reports") | [<img src="https://avatars3.githubusercontent.com/u/1301959?v=4" width="100px;"/><br /><sub><b>Max Graey</b></sub>](https://github.com/MaxGraey)<br />[💻](https://github.com/renatorib/react-powerplug/commits?author=MaxGraey "Code") | [<img src="https://avatars2.githubusercontent.com/u/9800850?v=4" width="100px;"/><br /><sub><b>Mateusz Burzyński</b></sub>](https://github.com/Andarist)<br />[🐛](https://github.com/renatorib/react-powerplug/issues?q=author%3AAndarist "Bug reports") | [<img src="https://avatars0.githubusercontent.com/u/1448194?v=4" width="100px;"/><br /><sub><b>Andy Edwards</b></sub>](http://helloandy.xyz)<br />[💻](https://github.com/renatorib/react-powerplug/commits?author=jedwards1211 "Code") | [<img src="https://avatars2.githubusercontent.com/u/1159781?v=4" width="100px;"/><br /><sub><b>Andrea Vanini</b></sub>](http://uidu.org)<br />[🐛](https://github.com/renatorib/react-powerplug/issues?q=author%3Aapuntovanini "Bug reports") |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars3.githubusercontent.com/u/5077042?v=4" width="100px;"/><br /><sub><b>Ivan Starkov</b></sub>](https://twitter.com/icelabaratory)<br />[🐛](https://github.com/renatorib/react-powerplug/issues?q=author%3Aistarkov "Bug reports") | [<img src="https://avatars1.githubusercontent.com/u/25376?v=4" width="100px;"/><br /><sub><b>Sean Roberts</b></sub>](http://factore.ca)<br />[📖](https://github.com/renatorib/react-powerplug/commits?author=SeanRoberts "Documentation") | [<img src="https://avatars3.githubusercontent.com/u/83964?v=4" width="100px;"/><br /><sub><b>Braden Kelley</b></sub>](https://github.com/redbmk)<br />[🐛](https://github.com/renatorib/react-powerplug/issues?q=author%3Aredbmk "Bug reports") |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

# Contribute

You can help improving this project sending PRs and helping with issues.  
Also you can ping me at [Twitter](http://twitter.com/renatorib_)
