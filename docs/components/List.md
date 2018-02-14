# List

The List component is used to save and handle a list (array). For example a tag list, todos, etc.

```js
import { List } from 'react-powerplug'
```

```jsx
<List initial={['#react', '#babel']}>
  {({ list, pull, push }) => (
    <div>
      <FormInput onSubmit={push} />
      {list.map({ tag }) => (
        <Tag onRemove={() => pull(value => value === tag)}>
          {tag}
        </Tag>
      )}
    </div>
  )}
</List>
```

## List Props

**initial = []** _(optional)_  
Specifies the initial list state, must be an array.
By default, the initial list state is an empty array.

## List Children Props

TL;DR: `{ list, push, pull, sort, setList }`

**list**  
`boolean`  
Your list state

**push**  
`(item: any) => void`  
Add an item to your list array

**pull**  
`(predicate: (item: any) => boolean) => void`  
Remove an item based on a predicate function  
Note: All matched items are removed

```js
// list = [{ name: 'Renato' }, { name: 'John' }]
pull(item => item.name === 'Renato')
// list = [{ name: 'John' }]
```

**sort**  
`(comparator: (a: item, b: item) => number)) => void`  
Use [Array.prototype.sort](https://www.w3schools.com/jsref/jsref_sort.asp) to sort your list state.

**setList**  
`(list: array) => void`  
Set a new full list to your state  
Note: use it to handle array in the way you prefer

```js
import R from 'ramda'

// list = [1, 2, 3, 4, 5, 6]
setList(R.drop(2, list)) // remove two first items
// list = [3, 4, 5, 6]
setList(R.dropLast(2, list)) // remove two last items
// list = [3, 4]
```
