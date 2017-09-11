import { Component } from 'react'

class State extends Component {
  static defaultProps = {
    initial: {}
  }

  state = {
    ...this.props.initial
  }

  render() {
    return this.props.children({
      state: this.state,
      setState: this.setState.bind(this),
    })
  }
}

export default State
