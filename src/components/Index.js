import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Index = ({ initial = 0, onChange, ...props }) => (
  <State initial={{ index: initial }} onChange={onChange}>
    {({ state, setState }) => renderProps(props, {
      index: state.index,
      setIndex: (index) => setState({ index }),
    })}
  </State>
)

export default Index
