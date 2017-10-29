import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Form = ({ initial = {}, onChange, ...props }) => (
  <State initial={{ ...initial }} onChange={onChange}>
    {({ state, setState }) => renderProps(props, {
      input: (id) => {
        const value = state[id] || ''
        const setValue = value => setState({ [id]: value })

        return {
          bind: {
            onChange: event => setValue(event.target.value),
            value,
          },
          setValue,
          value,
        }
      },
    })}
  </State>
)

export default Form
