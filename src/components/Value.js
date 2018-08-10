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
        ? (state, props) => ({ value: updater(state.value, props.initial) })
        : { value: updater },
      () => {
        onChange(this.state.value)
        cb()
      }
    )
  }

  render() {
    return renderProps(this.props, {
      value: this.state.value,
      set: this._set,
    })
  }
}

export default Value
