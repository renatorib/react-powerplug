import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const defaultGetter = (event) =>
  event.target.value

const Bind = ({ getter = defaultGetter, initial = '', ...props }) => (
  <State initial={{ value: initial }}>
    {({ state, setState }) => { 
      const setValue = (...args) =>
        setState({ value: getter(...args) })

      return renderProps(props, { 
        value: state.value,
        setValue,
        bind: {
          onChange: setValue,
          value: state.value,
        }
      })
    }}
  </State>
)

export default Bind
