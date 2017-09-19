import { Component } from 'react'
import renderProps from '../utils/renderProps'

class Active extends Component {
  state = {
    active: false,
  }

  handleMouseDown = () =>
    this.setState({ active: true })

  handleMouseUp = () =>
    this.setState({ active: false })

  render() {
    return renderProps(this.props, {
      active: this.state.active,
      bindActive: {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp
      },
    })
  }
}

export default Active
