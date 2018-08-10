import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const add = diff => value => value + diff

const Counter = ({ initial = 0, onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set }) =>
      renderProps(props, {
        count: value,
        inc: () => set(add(1)),
        dec: () => set(add(-1)),
        incBy: value => set(add(value)),
        decBy: value => set(add(-value)),
        set: value => set(value),
      })
    }
  </Value>
)

export default Counter
