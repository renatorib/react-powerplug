import { Component } from 'react'
import renderProps from '../utils/renderProps'

class State extends Component {
  static defaultProps = {
    initial: {}
  }

  state = {
    ...this.props.initial
  }

  setState = this.setState.bind(this)

  render() {
    return renderProps(this.props, {
      state: this.state,
      setState: this.setState,
    })
  }
}

export default State
