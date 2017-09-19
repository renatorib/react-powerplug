import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const complement = fn =>
  (...args) => !fn(...args)

const List = ({ initial = [], ...props }) => (
  <State initial={{ list: initial }}>
    {({ state, setState }) => renderProps(props, {
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
