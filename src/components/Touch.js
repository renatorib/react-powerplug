import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const Touch = ({ onChange, ...props }) => (
  <State
    initial={{ touched: false }}
    onChange={onChangeProp(onChange, 'touched')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        touched: state.touched,
        bind: {
          onTouchStart: () => setState({ touched: true }),
          onTouchEnd: () => setState({ touched: false }),
        },
      })
    }
  </State>
)

export default Touch
