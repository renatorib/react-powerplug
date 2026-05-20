import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Hover = ({ onChange, ...props }) => (
  <Value initial={false} onChange={onChange}>
    {({ value, set }) =>
      renderProps(props, {
        hovered: value,
        bind: {
          onMouseEnter: () => set(true),
          onMouseLeave: () => set(false),
        },
      })
    }
  </Value>
)

export default Hover
