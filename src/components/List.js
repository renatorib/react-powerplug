import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const complement = fn =>
  (...args) => !fn(...args)

const List = ({ initial = [], onChange, ...props }) => (
  <State initial={{ list: initial }} onChange={onChange}>
    {({ state, setState }) => renderProps(props, {
      list: state.list,
      setList: (list) =>
        setState({ list }),
      push: (value) =>
        setState(prevState => ({ list: [...prevState.list, value] })),
      pull: (predicate) =>
        setState(prevState => ({ list: [...prevState.list].filter(complement(predicate)) })),
      sort: (compareFn) =>
        setState(prevState => ({ list: [...prevState.list].sort(compareFn) })),
    })}
  </State>
)

export default List
