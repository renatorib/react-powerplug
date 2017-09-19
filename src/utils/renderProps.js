import warn from './warn'

const isFn = (prop) => typeof prop === 'function'

const childrenRenderInterop = ({ children, render }, props) => {
  warn(isFn(children) && isFn(render), `
    You are using the children and render props together.
    This is impossible, therefore, only the children will be used.
  `)
  
  const fn = isFn(children)
    ? children
    : render
  
  return fn && fn(props)
}

export default childrenRenderInterop
