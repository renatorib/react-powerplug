import prop from './prop'

const onChangeProp = (propName, originalOnChange) => state => {
  originalOnChange(prop(propName)(state))
}

export default onChangeProp
