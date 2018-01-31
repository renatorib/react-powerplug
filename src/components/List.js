import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const complement = fn => (...args) => !fn(...args)

const List = ({ initial = [], onChange, ...props }) => (
  <State initial={{ list: initial }} onChange={onChange}>
    {({ state, setState }) =>
      renderProps(props, {
        list: state.list,
        first: () => state.list[0],
        last: () => state.list[Math.max(0, state.list.length - 1)],
        setList: list => setState({ list }),
        push: value => setState(({ list }) => ({ list: [...list, value] })),
        pull: predicate =>
          setState(({ list }) => ({
            list: list.filter(complement(predicate)),
          })),
        sort: compareFn =>
          setState(({ list }) => ({ list: [...list].sort(compareFn) })),
      })
    }
  </State>
)

export default List
