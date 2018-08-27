import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const isObject = value => typeof value === 'object' && value

const Input = ({ initial = '', onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set, reset }) => {
      const setValue = updater =>
        typeof updater === 'function'
          ? set(prev => updater(prev))
          : set(updater)

      return renderProps(props, {
        value,
        reset,
        set: setValue,
        bind: {
          value,
          onChange: event => {
            if (isObject(event) && isObject(event.target)) {
              setValue(event.target.value)
            } else {
              setValue(event)
            }
          },
        },
      })
    }}
  </Value>
)

export default Input
