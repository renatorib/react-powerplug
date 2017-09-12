import { Component } from 'react'

class State extends Component {
  static defaultProps = {
    initial: {}
  }

  state = {
    ...this.props.initial
  }

  setState = this.setState.bind(this)

  render() {
    return this.props.children({
      state: this.state,
      setState: this.setState,
    })
  }
}

export default State
