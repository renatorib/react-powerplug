import { Component } from 'react'
import renderProps from '../utils/renderProps'

const noop = () => {}

const getFn = ({ fn, method }) => fn || method || noop

const getWait = ({ wait, timer }) => {
  const value = wait != null ? wait : timer
  return Number.isFinite(value) ? Math.max(0, value) : 0
}

class Throttle extends Component {
  timeoutId = undefined
  trailingArgs = undefined
  throttled = false

  _clearTimeoutIfNecessary = () => {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId)
      this.timeoutId = undefined
    }
  }

  _setTimeout = () => {
    this.timeoutId = setTimeout(this._onTimeout, getWait(this.props))
  }

  _onTimeout = () => {
    if (this.trailingArgs) {
      const currentArgs = this.trailingArgs

      this.trailingArgs = undefined
      getFn(this.props)(...currentArgs)
      this._setTimeout()
      return
    }

    this.timeoutId = undefined
    this.throttled = false
  }

  cancel = () => {
    this._clearTimeoutIfNecessary()
    this.trailingArgs = undefined
    this.throttled = false
  }

  fn = (...args) => {
    if (this.throttled) {
      this.trailingArgs = args
      return
    }

    this.throttled = true
    getFn(this.props)(...args)
    this._setTimeout()
  }

  componentWillUnmount() {
    this.cancel()
  }

  render() {
    return renderProps(this.props, {
      fn: this.fn,
      cancel: this.cancel,
    })
  }
}

export default Throttle
