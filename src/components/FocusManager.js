import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import noop from '../utils/noop'

const FocusManager = ({ onChange, ...props }) => (
  <State initial={{ isFocused: false, timeoutId: null }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        isFocused: state.isFocused,
        blur: () => {
          setState({ isFocused: false })
        },
        bind: {
          tabIndex: -1,
          onBlur: () => {
            // the timeoutId is saved in state to not cleanup in a rerender
            setState({
              timeoutId: setTimeout(() => {
                setState({ isFocused: false })
              }),
            })
          },
          onFocus: () => {
            clearTimeout(state.timeoutId)
            setState({ isFocused: true })
          },
        },
      })
    }
  </State>
)

export default FocusManager
