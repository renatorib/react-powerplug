import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Active = ({ onChange, ...props }) => (
  <State
    initial={{ isActive: false }}
    onChange={onChangeProp(onChange, 'isActive')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        isActive: state.isActive,
        bind: {
          onMouseDown: () => setState({ isActive: true }),
          onMouseUp: () => setState({ isActive: false }),
        },
      })
    }
  </State>
)

export default Active
