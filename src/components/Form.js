import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Form = ({ initial = {}, onChange, ...props }) => (
  <Value initial={{ ...initial }} onChange={onChange}>
    {({ value: values, set }) =>
      renderProps(props, {
        values,
        input: id => {
          const value = values[id] || ''
          const setValue = updater =>
            typeof updater === 'function'
              ? set(prev => ({ ...prev, [id]: updater(prev[id]) }))
              : set({ ...values, [id]: updater })

          return {
            value,
            set: setValue,
            bind: {
              value,
              onChange: event => setValue(event.target.value),
            },
          }
        },
      })
    }
  </Value>
)

export default Form
