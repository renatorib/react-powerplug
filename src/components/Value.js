import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Value = ({ initial = '', ...props }) => (
  <State initial={{ value: initial }}>
    {({ state, setState }) => renderProps(props, {
      value: state.value,
      setValue: (value) => setState({ value }),
    })}
  </State>
)

export default Value
