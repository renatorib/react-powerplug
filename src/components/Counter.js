import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const add = value => state => ({
  count: state.count + value,
})

const Counter = ({ initial = 0, onChange, ...props }) => (
  <State
    initial={{ count: initial }}
    onChange={onChangeProp(onChange, 'count')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        count: state.count,
        inc: () => setState(add(1)),
        dec: () => setState(add(-1)),
        incBy: value => setState(add(value)),
        decBy: value => setState(add(-value)),
        set: count => setState(() => ({ count })),
      })
    }
  </State>
)

export default Counter
