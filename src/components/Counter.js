import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import set from '../utils/set'
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
        set: value => setState(s => ({ count: set(value, s.count) })),
      })
    }
  </State>
)

export default Counter
