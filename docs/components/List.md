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

**onChange** _(optional)_  
The onChange event of the List is called whenever the list state changes.

## List Children Props

TL;DR: `{ list, first, last, push, pull, sort, set }`

**list**  
`array`  
Your list state

**first**
`() => any`  
Get first element of your list array

**last**
`() => any`  
Get last element of your list array

**push**  
`(item1: any, item2: any, ...) => void`  
Add an items to your list array

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

**set**  
`(list: array | (list: array) => array) => void`  
Set a new full list to your state  
Note: use it to handle array in the way you prefer

```js
import R from 'ramda'

set([1, 2, 3, 4])
set(list => [...list, 5, 6])
// list = [1, 2, 3, 4, 5, 6]

set(R.drop(2)) // remove two first items
// list = [3, 4, 5, 6]

set(R.dropLast(2)) // remove two last items
// list = [3, 4]
```

**reset**  
`() => void`  
Reset value to initial
