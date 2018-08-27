import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const isObject = value => typeof value === 'object' && value

const Form = ({ initial = {}, onChange, ...props }) => (
  <Value initial={{ ...initial }} onChange={onChange}>
    {({ value: values, set, reset }) =>
      renderProps(props, {
        values,

        reset,

        setValues: nextValues =>
          set(prev => ({
            ...prev,
            ...(typeof nextValues === 'function'
              ? nextValues(prev)
              : nextValues),
          })),

        field: id => {
          const value = values[id]
          const setValue = updater =>
            typeof updater === 'function'
              ? set(prev => ({ ...prev, [id]: updater(prev[id]) }))
              : set({ ...values, [id]: updater })

          return {
            value,
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
          }
        },
      })
    }
  </Value>
)

export default Form
