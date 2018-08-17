import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Input = ({ initial = '', onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set, reset }) =>
      renderProps(props, {
        value,
        set: value => set(value),
        reset,
        bind: {
          value,
          onChange: event => set(event.target.value),
        },
      })
    }
  </Value>
)

export default Input
