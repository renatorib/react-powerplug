import * as React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'
import onChangeProp from '../utils/onChangeProp'

const unique = arr => arr.filter((d, i) => arr.indexOf(d) === i)
const hasItem = (arr, item) => arr.indexOf(item) !== -1
const removeItem = (arr, item) =>
  hasItem(arr, item) ? arr.filter(d => d !== item) : arr
const addUnique = (arr, item) => (hasItem(arr, item) ? arr : [...arr, item])

const Set = ({ initial = [], onChange, ...props }) => (
  <State
    initial={{ values: unique(initial) }}
    onChange={onChangeProp(onChange, 'values')}
  >
    {({ state, setState }) =>
      renderProps(props, {
        values: state.values,
        add: key => setState({ values: addUnique(state.values, key) }),
        clear: () => setState({ values: [] }),
        remove: key => setState({ values: removeItem(state.values, key) }),
        has: key => hasItem(state.values, key),
      })
    }
  </State>
)

export default Set
