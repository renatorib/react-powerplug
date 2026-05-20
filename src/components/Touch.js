import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Touch = ({ onChange, ...props }) => (
  <Value initial={false} onChange={onChange}>
    {({ value, set }) =>
      renderProps(props, {
        touched: value,
        bind: {
          onTouchStart: () => set(true),
          onTouchEnd: () => set(false),
        },
      })
    }
  </Value>
)

export default Touch
