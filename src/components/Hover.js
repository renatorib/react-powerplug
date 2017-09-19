import { Component } from 'react'
import renderProps from '../utils/renderProps'

class Hover extends Component {
  state = {
    hover: false,
  }

  handleMouseEnter = () =>
    this.setState({ hover: true })

  handleMouseLeave = () =>
    this.setState({ hover: false })

  render() {
    return renderProps(this.props, {
      hover: this.state.hover,
      bindHover: {
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      },
    })
  }
}

export default Hover
