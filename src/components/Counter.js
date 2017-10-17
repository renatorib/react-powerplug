import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Counter = ({ initial = 0, onChange, ...props }) => (
  <State initial={{ count: initial }} onChange={onChange}>
    {({ state, setState }) => renderProps(props, {
      count: state.count,
      inc: (value = 1) =>
        setState(s => ({ count: s.count + value })),
      dec: (value = 1) =>
        setState(s => ({ count: s.count - value })),
    })}
  </State>
)

export default Counter
