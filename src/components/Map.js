import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Map = ({ initial = {}, onChange, ...props }) => (
  <Value initial={{ ...initial }} onChange={onChange}>
    {({ value: values, set, reset }) =>
      renderProps(props, {
        values,
        clear: () => set({}),
        reset,
        set: (key, updater) =>
          set(prev => ({
            ...prev,
            [key]: typeof updater === 'function' ? updater(prev[key]) : updater,
          })),
        get: key => values[key],
        has: key => values[key] != null,
        delete: key => set(({ [key]: deleted, ...prev }) => prev),
      })
    }
  </Value>
)

export default Map
