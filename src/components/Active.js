import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Active = ({ onChange, ...props }) => (
  <State initial={{ isActive: false }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        isActive: state.isActive,
        bind: {
          onMouseDown: () => setState({ isActive: true }),
          onMouseUp: () => setState({ isActive: false }),
        },
      })
    }
  </State>
)

export default Active
