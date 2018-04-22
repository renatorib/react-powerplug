import { Component } from 'react'
import renderProps from '../utils/renderProps'

class Interval extends Component {
  static defaultProps = {
    delay: 1000,
  }

  intervalId = undefined

  _clearIntervalIfNecessary = () => {
    if (this.intervalId) {
      this.intervalId = clearInterval(this.intervalId)
    }
  }

  _setIntervalIfNecessary = delay => {
    if (Number.isFinite(delay)) {
      this.intervalId = setInterval(() => this.forceUpdate(), delay)
    }
  }

  stop = () => {
    this._clearIntervalIfNecessary()
  }

  start = delay => {
    this._setIntervalIfNecessary(
      Number.isFinite(delay) ? delay : this.props.delay
    )
  }

  toggle = () => {
    this.intervalId ? this.stop() : this.start()
  }

  componentDidMount() {
    this.start()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.delay !== nextProps.delay) {
      this.stop()
      this.start(nextProps.delay)
    }
  }

  componentWillUnmount() {
    this.stop()
  }

  render() {
    return renderProps(this.props, {
      start: this.start,
      stop: this.stop,
      toggle: this.toggle,
    })
  }
}

export default Interval
