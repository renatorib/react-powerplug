import { Component } from 'react'
import renderProps from '../utils/renderProps'

const noop = () => {}

class Value extends Component {
  state = {
    value: this.props.initial,
  }

  _set = (updater, cb = noop) => {
    const { onChange = noop } = this.props

    this.setState(
      typeof updater === 'function'
        ? state => ({ value: updater(state.value) })
        : { value: updater },
      () => {
        onChange(this.state.value)
        cb()
      }
    )
  }
  _reset = (cb = noop) => {
    this._set(this.props.initial, cb)
  }

  render() {
    return renderProps(this.props, {
      value: this.state.value,
      set: this._set,
      reset: this._reset,
    })
  }
}

export default Value
