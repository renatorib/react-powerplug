import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Hover = ({ onChange, ...props }) => (
  <State
    initial={{ hovered: false }}
    onChange={onChangeProp(onChange, 'hovered')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        hovered: state.hovered,
        bind: {
          onMouseEnter: () => setState({ hovered: true }),
          onMouseLeave: () => setState({ hovered: false }),
        },
      })
    }
  </State>
)

export default Hover
