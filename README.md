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
 
 > **React PowerPlug is a set of pluggable renderless components and helpers** that provides different types of state and logic utilities that you can use with your dumb components. It creates state and passes down the logic to the children, so you can handle your data. Read about the [Render Props](https://reactjs.org/docs/render-props.html) pattern.

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

## Guide & Documentation

http://rena.to/react-powerplug/

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
