import React from 'react'
import State from './State'

const Toggle = ({ children, initial = false }) => (
  <State initial={{ on: initial }}>
    {({ state, setState }) => children && children({
      on: state.on,
      off: !state.on,
      toggle: () => setState(s => ({ on: !s.on })),
      setOn: (on) => setState({ on }),
    })}
  </State>
)

export default Toggle
