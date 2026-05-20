import { Component } from 'react'
import renderProps from '../utils/renderProps'

const noop = () => {}

const getFn = ({ fn, method }) => fn || method || noop

const getWait = ({ wait, timer }) => {
  const value = wait != null ? wait : timer
  return Number.isFinite(value) ? Math.max(0, value) : 0
}

class Debounce extends Component {
  timeoutId = undefined
  args = undefined

  _clearTimeoutIfNecessary = () => {
    if (this.timeoutId !== undefined) {
      clearTimeout(this.timeoutId)
      this.timeoutId = undefined
    }
  }

  cancel = () => {
    this._clearTimeoutIfNecessary()
    this.args = undefined
  }

  fn = (...args) => {
    this.args = args
    this._clearTimeoutIfNecessary()

    this.timeoutId = setTimeout(() => {
      const currentArgs = this.args

      this.timeoutId = undefined
      this.args = undefined

      getFn(this.props)(...currentArgs)
    }, getWait(this.props))
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

export default Debounce
