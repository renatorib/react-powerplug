import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const FocusManager = ({ onChange, ...props }) => {
  let canBlur = true
  return (
    <State
      initial={{ focused: false }}
      onChange={onChangeProp(onChange, 'focused')}
    >
      {({ state, setState }) =>
        renderProps(props, {
          focused: state.focused,
          blur: () => {
            if (state.focused) {
              document.activeElement.blur()
            }
          },
          bind: {
            tabIndex: -1,
            onBlur: () => {
              if (canBlur) {
                setState({ focused: false })
              }
            },
            onFocus: () => {
              setState({ focused: true })
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
