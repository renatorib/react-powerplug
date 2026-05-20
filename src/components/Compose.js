import compose from '../utils/compose'

const Compose = ({ components, ...props }) => compose(...components)(props)

export default Compose
