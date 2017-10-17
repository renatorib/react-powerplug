import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Bind = ({ initial = '', onChange, ...props }) => (
  <State initial={{ value: initial }} onChange={onChange}>
    {({ state, setState }) => renderProps(props, { 
      bind: {
        onChange: event => setState({ value: event.target.value }),
        value: state.value,
      },
      setValue: value => setState({ value }),
      value: state.value,
    })}
  </State>
)

export default Bind
