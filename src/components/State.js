import { Component } from 'react'
import renderProps from '../utils/renderProps'

class State extends Component {
  static defaultProps = {
    initial: {},
    onChange: null,
  }

  state = {
    ...this.props.initial
  }

  _setState = (updater, cb) => {
    this.setState(updater, () => {
      this.props.onChange && this.props.onChange(this.state)
      cb && cb()
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
