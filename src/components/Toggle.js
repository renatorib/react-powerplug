import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import set from '../utils/set'
import onChangeProp from '../utils/onChangeProp'

const Toggle = ({ initial = false, onChange, ...props }) => (
  <State initial={{ on: initial }} onChange={onChangeProp(onChange, 'on')}>
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
