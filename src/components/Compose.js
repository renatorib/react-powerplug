import { compose } from '../utils/compose'

export const Compose = ({ states, ...props }) => compose(...states)(props)
