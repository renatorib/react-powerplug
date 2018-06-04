import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Focus = ({ onChange, ...props }) => (
  <State
    initial={{ isFocused: false }}
    onChange={onChangeProp(onChange, 'isFocused')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        isFocused: state.isFocused,
        bind: {
          onFocus: () => setState({ isFocused: true }),
          onBlur: () => setState({ isFocused: false }),
        },
      })
    }
  </State>
)

export default Focus
