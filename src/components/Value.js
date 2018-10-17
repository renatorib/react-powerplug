import { Component } from 'react'
import renderProps from '../utils/renderProps'

class Value extends Component {
  state = {
    value: this.props.initial,
  }

  _set = (updater, cb) => {
    const { onChange } = this.props

    this.setState(
      typeof updater === 'function'
        ? state => ({ value: updater(state.value) })
        : { value: updater },
      () => {
        onChange && onChange(this.state.value)
        typeof cb === 'function' && cb()
      }
    )
  }

  _reset = (cb) => {
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
