import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Toggle = ({ initial = false, onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set, reset }) =>
      renderProps(props, {
        on: value,
        set: value => set(value),
        reset,
        toggle: () => set(on => !on),
        setOn: () => set(true),
        setOff: () => set(false),
      })
    }
  </Value>
)

export default Toggle
