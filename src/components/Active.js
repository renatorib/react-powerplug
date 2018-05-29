import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Active = ({ onChange, ...props }) => (
  <State initial={{ value: false }} onChange={onChangeProp('value', onChange)}>
    {({ state, setState }) =>
      renderProps(props, {
        value: state.value,
        bind: {
          onMouseDown: () => setState({ value: true }),
          onMouseUp: () => setState({ value: false }),
        },
      })
    }
  </State>
)

export default Active
