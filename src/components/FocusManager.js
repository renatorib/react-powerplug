import * as React from 'react'
import renderProps from '../utils/renderProps'
import noop from '../utils/noop'

class FocusManager extends React.Component {
  static defaultProps = {
    initial: false,
    onChange: noop,
  }

  state = {
    isFocused: this.props.initial,
  }

  _blur = () => {
    this.setState({ isFocused: false }, () => {
      this.props.onChange(this.state)
    })
  }

  _handleFocus = () => {
    clearTimeout(this._timeoutId)
    this.setState({ isFocused: true }, () => {
      this.props.onChange(this.state)
    })
  }

  _handleBlur = () => {
    this._timeoutId = setTimeout(() => {
      this.setState({ isFocused: false }, () => {
        this.props.onChange(this.state)
      })
    })
  }

  render() {
    return renderProps(this.props, {
      isFocused: this.state.isFocused,
      blur: this._blur,
      bind: {
        tabIndex: -1,
        onBlur: this._handleBlur,
        onFocus: this._handleFocus,
      },
    })
  }
}

export default FocusManager
