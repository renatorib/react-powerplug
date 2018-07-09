import noop from './noop'

const onChangeProp = (originalOnChange = noop, propName) => (
  newState,
  oldState
) => {
  originalOnChange(newState[propName], oldState[propName])
}

export default onChangeProp
