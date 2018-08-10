import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Focus = ({ onChange, ...props }) => (
  <Value initial={false} onChange={onChange}>
    {({ value, set }) =>
      renderProps(props, {
        focused: value,
        bind: {
          onFocus: () => set(true),
          onBlur: () => set(false),
        },
      })
    }
  </Value>
)

export default Focus
