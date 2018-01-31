import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Hover = ({ onChange, ...props }) => (
  <State initial={{ isHover: false }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        isHover: state.isHover,
        bindHover: {
          onMouseEnter: () => setState({ isHover: true }),
          onMouseLeave: () => setState({ isHover: false }),
        },
      })
    }
  </State>
)

export default Hover
