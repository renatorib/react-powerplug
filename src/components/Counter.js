import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Counter = ({ initial = 0, ...props }) => (
  <State initial={{ count: initial }}>
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
