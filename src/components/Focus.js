import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Focus = ({ onChange, ...props }) => (
  <State
    initial={{ focused: false }}
    onChange={onChangeProp(onChange, 'focused')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        focused: state.focused,
        bind: {
          onFocus: () => setState({ focused: true }),
          onBlur: () => setState({ focused: false }),
        },
      })
    }
  </State>
)

export default Focus
