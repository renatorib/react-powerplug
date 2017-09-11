import React from 'react'

const compose = (...elements) => {
  return ({ children }) => {
    // Recursively stack children argument props and pass
    // it down until the last component, that render children
    // with these stacked arguments
    function stackProps(i, elements, stacked = {}) {
      // check if latest component,
      // if latest render children,
      // otherwise continue stacking props
      const childrenFn = props =>
        i === 0
          ? children({ ...props, ...stacked }) 
          : stackProps(i - 1, elements, { ...props, ...stacked })

      return React.cloneElement(elements[i], {}, childrenFn)
    }

    return stackProps(elements.length - 1, elements)
  }
}

export default compose
