# Map

The Map component is an another generic used for a free key-value logics.

```js
import { Map } from 'react-powerplug'
```

```jsx
<Map initial={{ sounds: true, music: true, graphics: 'medium' }}>
  {({ set, get }) => (
    <Tings>
      <ToggleCheck checked={get('sounds')} onChange={c => set('sounds', c)}>
        Game Sounds
      </ToggleCheck>
      <ToggleCheck checked={get('music')} onChange={c => set('music', c)}>
        Bg Music
      </ToggleCheck>
      <Select
        label="Graphics"
        options={['low', 'medium', 'high']}
        selected={get('graphics')}
        onSelect={value => set('graphics', value)}
      />
    </Tings>
  )}
</Map>
```

## Map Props

**initial = {}** _(optional)_  
Specifies the initial state, must be an object.  
By default, the initial count state is an empty object

**onChange** _(optional)_  
The onChange event of the Map is called whenever the state changes.

## Map Children Props

TL;DR: `{ values, set, get, over }`

**values**  
`object`  
Your values state  
Behind the scenes it's just you raw state.

**set**  
`(key: string, value: any) => void`  
Assigns `value` to `key`.

**over**  
`(key: string, fn: (key: string) => string) => void`  
Takes a `key` and `function`, map a function over key's `value`.  
After applying function, the shape of your state stays the same.

**get**  
`(key: string) => value: any`  
Get assigned `value` from `key`
