import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Toggle = ({ initial = false, onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set, reset }) =>
      renderProps(props, {
        on: value,
        toggle: () => set(on => !on),
        set: value => set(value),
        reset,
      })
    }
  </Value>
)

export default Toggle
