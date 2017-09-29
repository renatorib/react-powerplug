import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Set = ({ initial = {}, ...props }) => (
  <State initial={{ ...initial }}>
    {({ state, setState }) => renderProps(props, {
      values: state,
      set: (key, value) => setState({ [key]: value }),
      over: (key, fn) => setState(s => ({ [key]: fn(s[key]) })),
      get: (key) => state[key],
    })}
  </State>
)

export default Set
