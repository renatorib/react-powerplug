import * as React from 'react'

class Mounting extends React.Component {
  setRef = ref => {
    this.ref = ref
  }

  componentDidMount() {
    if (this.props.onMount) {
      this.mountResult = this.props.onMount({ ref: this.ref })
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount(this.mountResult)
    }
  }

  render() {
    return this.props.children({ setRef: this.setRef })
  }
}

export default Mounting
