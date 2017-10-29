import compose from '../utils/compose'

const Compose = ({ states, ...props }) =>
  compose(...states)(props)

export default Compose
