import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Toggle = ({ initial = false, onChange, ...props }) => (
  <State initial={{ on: initial }} onChange={ onChange }>
    {({ state, setState }) => renderProps(props, {
      on: state.on,
      off: !state.on,
      toggle: () => setState(s => ({ on: !s.on })),
      setOn: (on) => setState({ on }),
    })}
  </State>
)

export default Toggle
