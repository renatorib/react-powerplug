import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Hover = ({ onChange, ...props }) => (
  <State
    initial={{ isHovered: false }}
    onChange={onChangeProp(onChange, 'isHovered')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        isHovered: state.isHovered,
        bind: {
          onMouseEnter: () => setState({ isHovered: true }),
          onMouseLeave: () => setState({ isHovered: false }),
        },
      })
    }
  </State>
)

export default Hover
