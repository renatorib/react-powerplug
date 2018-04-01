import * as React from 'react'
import renderProps from '../utils/renderProps'

class Timer extends React.Component {
  _intervalID = null

  _clearIntervalIfNecessary() {
    if (this.intervalID != null) {
      clearInterval(this.intervalID)
      this.intervalID = null
    }
  }

  _setIntervalIfNecessary(delay) {
    if (Number.isFinite(delay)) {
      this.intervalID = setInterval(() => this.forceUpdate(), delay)
    }
  }

  componentDidMount() {
    this._setIntervalIfNecessary(this.props.delay)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.delay !== nextProps.delay) {
      this._clearIntervalIfNecessary()
      this._setIntervalIfNecessary(nextProps.delay)
    }
  }

  componentWillUnmount() {
    this._clearIntervalIfNecessary()
  }

  render() {
    return renderProps(this.props, {
      time: new Date().getTime(),
    })
  }
}

export default Timer

