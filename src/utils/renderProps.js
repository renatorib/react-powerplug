import warn from './warn'

const isFn = prop => typeof prop === 'function'

/**
 * renderProps
 * is a render/children props interop.
 * will pick up the prop that was used,
 * or children if both are used
 */

const renderProps = ({ children, render }, ...props) => {
  if (process.env.NODE_ENV !== 'production') {
    warn(
      isFn(children) && isFn(render),
      'You are using the children and render props together.\n' +
        'This is impossible, therefore, only the children will be used.'
    )
  }

  const fn = isFn(children) ? children : render

  return fn ? fn(...props) : null
}

export default renderProps
