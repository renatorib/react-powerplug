import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const Map = ({ initial = {}, onChange, ...props }) => (
  <Value initial={{ ...initial }} onChange={onChange}>
    {({ value, set }) =>
      renderProps(props, {
        values: value,
        set: (key, value) => set(prev => ({ ...prev, [key]: value })),
        over: (key, fn) => set(prev => ({ ...prev, [key]: fn(prev[key]) })),
        get: key => value[key],
      })
    }
  </Value>
)

export default Map
