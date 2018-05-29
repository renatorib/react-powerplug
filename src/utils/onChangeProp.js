import noop from './noop'

const onChangeProp = (propName, originalOnChange = noop) => state => {
  originalOnChange(state[propName])
}

export default onChangeProp
