import * as React from 'react'

class Mounting extends React.Component {
  componentDidMount() {
    if (this.props.onMount) {
      this.mountResult = this.props.onMount()
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount(this.mountResult)
    }
  }

  render() {
    return this.props.children
  }
}

export default Mounting
