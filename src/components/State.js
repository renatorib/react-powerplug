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
    const { children } = this.props
    return children && children({
      state: this.state,
      setState: this.setState,
    })
  }
}

export default State
