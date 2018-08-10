import { Component } from 'react'
import renderProps from '../utils/renderProps'
import noop from '../utils/noop'

class State extends Component {
  state = {
    ...this.props.initial,
  }

  _setState = (updater, cb = noop) => {
    const { onChange = noop } = this.props

    this.setState(updater, () => {
      onChange(this.state)
      cb()
    })
  }

  _resetState = (cb = noop) => {
    this._setState({ ...this.props.initial }, cb)
  }

  render() {
    return renderProps(this.props, {
      state: this.state,
      setState: this._setState,
      resetState: this._resetState,
    })
  }
}

export default State
