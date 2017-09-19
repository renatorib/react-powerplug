import { Component } from 'react'
import renderProps from '../utils/renderProps'

class Focus extends Component {
  state = {
    focus: false,
  }

  handleFocusIn = () =>
    this.setState({ focus: true })

  handleFocusOut = () =>
    this.setState({ focus: false })

  render() {
    return renderProps(this.props, {
      focus: this.state.focus,
      bindFocus: {
        onFocusIn: this.handleFocusIn,
        onFocusOut: this.handleFocusOut
      },
    })
  }
}

export default Focus
