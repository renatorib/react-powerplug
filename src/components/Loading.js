import React from 'react'
import State from './State'
import renderProps from '../utils/renderProps'

const Loading = ({ initial = false, ...props }) => (
  <State initial={{ loading: initial }}>
    {({ state, setState }) => renderProps(props, {
      isLoading: state.loading,
      toggleLoading: () => setState(s => ({ loading: !s.loading })),
      setLoadingOn: () => setState({ loading: true }),
      setLoadingOff: () => setState({ loading: false }),
    })}
  </State>
)

export default Loading
