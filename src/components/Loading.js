import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Loading = ({ initial = false, onChange, ...props }) => (
  <State initial={{ isLoading: initial }} onChange={onChange}>
    {({ state, setState }) => renderProps(props, {
      isLoading: state.isLoading,
      toggleLoading: () => setState(s => ({ isLoading: !s.isLoading })),
      setLoading: (isLoading) => setState({ isLoading }),
    })}
  </State>
)

export default Loading
