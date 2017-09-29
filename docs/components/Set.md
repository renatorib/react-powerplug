# Set

The Set component is an another generic used for a free key-value logics.

```js
import { Set } from 'react-powerplug'
``` 

```jsx
<Set initial={{ sounds: true, music: true, graphics: 'medium' }}>
  {({ set, get }) => (
    <Settings>
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
    </Settings>
  )}
</Set>
``` 

## Set Props

**initial = {}** *(optional)*  
Specifies the initial state, must be an object.  
By default, the initial count state is an empty object

## Set Children Props

TL;DR: `{ values, set, get }`

**values**  
`object`  
Your values state  
Behind the scenes it's just you raw state.

**set**  
`(key: string, value: any) => void`  
Assigns `value` to `key`.  

**get**  
`(key: string) => value: any`  
Get assigned `value` from `key`

