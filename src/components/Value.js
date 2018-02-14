import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import set from '../utils/set'

const Value = ({ initial, onChange, ...props }) => (
  <State initial={{ value: initial }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        value: state.value,
        set: value => setState(s => ({ value: set(value, s.value) })),
      })
    }
  </State>
)

export default Value
