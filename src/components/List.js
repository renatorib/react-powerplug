import React from 'react'
import State from './State'

const complement = fn =>
  (...args) => !fn(...args)

const List = ({ children, initial = [] }) => (
  <State initial={{ list: initial }}>
    {({ state, setState }) => children({
      list: state.list,
      setList: (list) => setState({ list }),
      push: (value) =>
        setState({ list: state.list.push(value) }),
      pull: (predicate) =>
        setState({ list: state.list.filter(complement(predicate)) }),
      sort: (compareFn) =>
        setState({ list: state.list.sort(compareFn) }),
    })}
  </State>
)

export default List
