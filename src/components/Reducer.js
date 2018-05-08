import { Component } from 'react'
import renderProps from '../utils/renderProps'
class Reducer extends Component {
  static defaultProps = {
    initial: {},
    actions: {},
  }

  state = {
    ...this.props.initial,
  }

  dispatch = (type, ...payload) => {
    const { actions } = this.props
    const handler = actions[type]
    if (handler === undefined)
      throw Error('No handler is defined for this type of action')
    const nextStatePatch = handler(this.state, ...payload)
    this.setState(nextStatePatch)
  }

  render() {
    return renderProps(this.props, {
      state: this.state,
      dispatch: this.dispatch,
    })
  }
}

export default Reducer
