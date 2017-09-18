import React from 'react'
import State from './State'

const defaultGetter = (event) =>
  event.target.value

const Bind = ({ children, getter = defaultGetter, initial = '' }) => (
  <State initial={{ value: initial }}>
    {({ state, setState }) => { 
      const setValue = (...args) =>
        setState({ value: getter(...args) })

      return children && children({ 
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
