import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Active = props => (
  <State initial={{ isActive: false }}>
    {({ state, setState }) => renderProps(props, {
      isActive: state.isActive,
      bindActive: {
        onMouseDown: () => setState({ isActive: true }),
        onMouseUp: () => setState({ isActive: false }),
      },
    })}
  </State>
)

export default Active
