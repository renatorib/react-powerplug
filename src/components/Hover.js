import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Hover = props => (
  <State initial={{ isHover: false }}>
    {({ state, setState }) => renderProps(props, {
      isHover: state.isHover,
      bindHover: {
        onMouseEnter: () => setState({ isHover: true }),
        onMouseLeave: () => setState({ isHover: false }),
      },
    })}
  </State>
)

export default Hover
