import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Active = ({ onChange, ...props }) => (
  <State
    initial={{ active: false }}
    onChange={onChangeProp(onChange, 'active')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        active: state.active,
        bind: {
          onMouseDown: () => setState({ active: true }),
          onMouseUp: () => setState({ active: false }),
        },
      })
    }
  </State>
)

export default Active
