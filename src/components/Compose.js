import compose from '../utils/compose'

const Compose = ({ states, children }) => compose(...states)({ children })

export default Compose
