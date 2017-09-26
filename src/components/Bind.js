import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import warn from '../utils/warn'

const Bind = ({ initial = '', ...props }) => {
  warn(true, `
    Bind component is deprecated and will be renamed to BindInput in v1.  
    See the docs at https://github.com/renatorib/react-powerplug/blob/master/docs/components/Bind.md
  `)
  return (
    <State initial={{ value: initial }}>
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
}

export default Bind
