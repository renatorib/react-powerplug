import React from 'react'
import State from './State'

const Set = ({ children, initial = {} }) => (
  <State initial={{ ...initial }}>
    {({ state, setState }) => children({
      values: state,
      set: (key, value) => setState({ [key]: value }),
      over: (key, fn) => setState(s => ({ [key]: fn(s[key]) })),
      get: (key) => state[key],
    })}
  </State>
)

export default Set
