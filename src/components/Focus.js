import * as React from 'react'
import { State } from './State'
import { renderProps } from '../utils/renderProps'

export const Focus = ({ onChange, ...props }) => (
  <State initial={{ isFocused: false }} onChange={onChange}>
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
