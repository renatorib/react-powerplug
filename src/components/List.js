import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const complement = fn => (...args) => !fn(...args)

const List = ({ initial = [], onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set, reset }) =>
      renderProps(props, {
        list: value,
        first: () => value[0],
        last: () => value[Math.max(0, value.length - 1)],
        set: list => set(list),
        push: (...values) => set(list => [...list, ...values]),
        pull: predicate => set(list => list.filter(complement(predicate))),
        sort: compareFn => set(list => [...list].sort(compareFn)),
        reset,
      })
    }
  </Value>
)

export default List
