import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import set from '../utils/set'

const Form = ({ initial = {}, onChange, ...props }) => (
  <State initial={{ ...initial }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        values: { ...state },
        input: id => {
          const value = state[id] || ''
          const setValue = value => setState({ [id]: value })

          return {
            bind: {
              onChange: event => setValue(event.target.value),
              value,
            },
            set: value => setState(s => ({ [id]: set(value, s.value) })),
            value,
          }
        },
      })
    }
  </State>
)

export default Form
