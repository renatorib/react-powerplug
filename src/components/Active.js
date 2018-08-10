import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Active = ({ onChange, ...props }) => (
  <Value initial={false} onChange={onChange}>
    {({ value, set }) =>
      renderProps(props, {
        active: value,
        bind: {
          onMouseDown: () => set(true),
          onMouseUp: () => set(false),
        },
      })
    }
  </Value>
)

export default Active
