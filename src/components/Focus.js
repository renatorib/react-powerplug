import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Focus = props => (
  <State initial={{ isFocus: false }}>
    {({ state, setState }) => renderProps(props, {
      isFocus: state.isFocus,
      bindFocus: {
        onFocusIn: () => setState({ isFocus: true }),
        onFocusOut: () => setState({ isFocus: false }),
      },
    })}
  </State>
)

export default Focus
