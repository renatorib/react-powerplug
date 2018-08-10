import { Component } from 'react'
import renderProps from '../utils/renderProps'
import noop from '../utils/noop'

class State extends Component {
  state = {
    value: {
      ...this.props.initial,
    },
  }

  _setState = (updater, cb = noop) => {
    const { onChange = noop } = this.props

    this.setState(
      typeof updater === 'function'
        ? state => ({
            value: {
              ...state.value,
              ...updater(state.value),
            },
          })
        : { value: { ...this.state.value, ...updater } },
      () => {
        onChange(this.state.value)
        cb()
      }
    )
  }

  _resetState = (cb = noop) => {
    const { onChange = noop } = this.props

    this.setState({ value: { ...this.props.initial } }, () => {
      onChange(this.state.value)
      cb()
    })
  }

  render() {
    return renderProps(this.props, {
      state: this.state.value,
      setState: this._setState,
      resetState: this._resetState,
    })
  }
}

export default State
