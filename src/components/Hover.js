import * as React from 'react'
import { State } from './State'
import { renderProps } from '../utils/renderProps'

export const Hover = ({ onChange, ...props }) => (
  <State initial={{ isHovered: false }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        isHovered: state.isHovered,
        bind: {
          onMouseEnter: () => setState({ isHovered: true }),
          onMouseLeave: () => setState({ isHovered: false }),
        },
      })
    }
  </State>
)
