import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const FocusManager = ({ onChange, ...props }) => {
  let canBlur = true
  return (
    <State
      initial={{ isFocused: false }}
      onChange={onChangeProp(onChange, 'isFocused')}
    >
      {({ state, setState }) =>
        renderProps(props, {
          isFocused: state.isFocused,
          blur: () => {
            setState({ isFocused: false })
          },
          bind: {
            tabIndex: -1,
            onBlur: () => {
              if (canBlur) {
                setState({ isFocused: false })
              }
            },
            onFocus: () => {
              setState({ isFocused: true })
            },
            onMouseDown: () => {
              canBlur = false
            },
            onMouseUp: () => {
              canBlur = true
            },
          },
        })
      }
    </State>
  )
}

export default FocusManager
