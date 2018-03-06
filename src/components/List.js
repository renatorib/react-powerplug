import * as React from 'react'
import { State } from './State'
import { renderProps } from '../utils/renderProps'
import { set } from '../utils/set'

const complement = fn => (...args) => !fn(...args)

export const List = ({ initial = [], onChange, ...props }) => (
  <State initial={{ list: initial }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        list: state.list,
        first: () => state.list[0],
        last: () => state.list[Math.max(0, state.list.length - 1)],
        set: list => setState(s => ({ list: set(list, s.list) })),
        push: value => setState(s => ({ list: [...s.list, value] })),
        pull: predicate =>
          setState(s => ({ list: s.list.filter(complement(predicate)) })),
        sort: compareFn =>
          setState(s => ({ list: [...s.list].sort(compareFn) })),
      })
    }
  </State>
)
