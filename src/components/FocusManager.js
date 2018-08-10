import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const FocusManager = ({ onChange, ...props }) => {
  let canBlur = true
  return (
    <Value initial={false} onChange={onChange}>
      {({ value, set }) =>
        renderProps(props, {
          focused: value,
          blur: () => {
            if (value) {
              document.activeElement.blur()
            }
          },
          bind: {
            tabIndex: -1,
            onBlur: () => {
              if (canBlur) {
                set(false)
              }
            },
            onFocus: () => {
              set(true)
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
    </Value>
  )
}

export default FocusManager
