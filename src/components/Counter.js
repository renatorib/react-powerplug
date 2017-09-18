import React from 'react'
import State from './State'

const Counter = ({ children, initial = 0 }) => (
  <State initial={{ count: initial }}>
    {({ state, setState }) => children && children({
      count: state.count,
      inc: (value = 1) =>
        setState(s => ({ count: s.count + value })),
      dec: (value = 1) =>
        setState(s => ({ count: s.count - value })),
    })}
  </State>
)

export default Counter
