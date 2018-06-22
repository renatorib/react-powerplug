# Set

The Set component is used to work with an array of unique values.

```js
import { Set } from 'react-powerplug'
```

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

## Set Props

**initial = []** _(optional)_  
Specifies the initial values state, must be an array. Duplicate items will be removed. 
By default, the initial values state is an empty array.

**onChange** _(optional)_  
The onChange event of the Set is called whenever the values state changes.

## Set Children Props

TL;DR: `{ values, add, clear, remove, has }`

**values**  
`array`  
Your values state, contains only unique items

**add**  
`(value: any) => void`  
Add a unique `value` to your values array. Does nothing if values array already includes a `value`.

**clear**
`() => any`  
Reset values state to an empty array

**remove**  
`(value: any) => void`  
Remove a `value` from your values array

**has**  
`(value: any) => boolean`  
True if values array includes a `value`