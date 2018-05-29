import noop from './noop'

const onChangeProp = (originalOnChange = noop, propName) => state => {
  originalOnChange(state[propName])
}

export default onChangeProp
