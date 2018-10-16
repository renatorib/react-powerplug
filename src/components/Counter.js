import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const add = amount => value => value + amount

const Counter = ({ initial = 0, onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set, reset }) =>
      renderProps(props, {
        count: value,
        inc: () => set(add(1)),
        dec: () => set(add(-1)),
        incBy: value => set(add(value)),
        decBy: value => set(add(-value)),
        set: value => set(value),
        reset,
      })
    }
  </Value>
)

export default Counter
