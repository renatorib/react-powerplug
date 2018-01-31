import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const add = value => prev => ({
  count: prev.count + value,
})

const Counter = ({ initial = 0, onChange, ...props }) => (
  <State initial={{ count: initial }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        count: state.count,
        inc: () => setState(add(1)),
        dec: () => setState(add(-1)),
        incBy: value => setState(add(value)),
        decBy: value => setState(add(-value)),
      })
    }
  </State>
)

export default Counter
