import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import set from '../utils/set'

const Toggle = ({ initial = false, onChange, ...props }) => (
  <State initial={{ on: initial }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        on: state.on,
        toggle: () => setState(s => ({ on: !s.on })),
        set: value => setState(s => ({ on: set(value, s.on) })),
      })
    }
  </State>
)

export default Toggle
