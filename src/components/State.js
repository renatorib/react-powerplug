import { Component } from 'react'
import renderProps from '../utils/renderProps'
import noop from '../utils/noop'

class State extends Component {
  state = {
    ...this.props.initial,
  }

  _setState = (updater, cb = noop) => {
    const { onChange = noop } = this.props
    const oldState = this.state

    this.setState(updater, () => {
      onChange(this.state, oldState)
      cb()
    })
  }

  render() {
    return renderProps(this.props, {
      state: this.state,
      setState: this._setState,
    })
  }
}

export default State
