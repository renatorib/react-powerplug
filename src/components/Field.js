import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const isObject = value => typeof value === 'object' && value

const Input = ({ initial = '', onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set, reset }) =>
      renderProps(props, {
        value,
        reset,
        set,
        bind: {
          value,
          onChange: event => {
            if (isObject(event) && isObject(event.target)) {
              set(event.target.value)
            } else {
              set(event)
            }
          },
        },
      })
    }
  </Value>
)

export default Input
