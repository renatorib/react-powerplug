import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const unique = arr => arr.filter((d, i) => arr.indexOf(d) === i)
const hasItem = (arr, item) => arr.indexOf(item) !== -1
const removeItem = (arr, item) =>
  hasItem(arr, item) ? arr.filter(d => d !== item) : arr
const addUnique = (arr, item) => (hasItem(arr, item) ? arr : [...arr, item])

const Set = ({ initial = [], onChange, ...props }) => (
  <Value initial={unique(initial)} onChange={onChange}>
    {({ value, set, reset }) =>
      renderProps(props, {
        values: value,
        add: key => set(values => addUnique(values, key)),
        clear: () => set([]),
        remove: key => set(values => removeItem(values, key)),
        has: key => hasItem(value, key),
        reset,
      })
    }
  </Value>
)

export default Set
