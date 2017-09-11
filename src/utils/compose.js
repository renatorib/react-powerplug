import React from 'react'

const compose = (...elements) => {
  return ({ children }) => {

    // Stack children arguments recursively and pass
    // it down until the last component that render children
    // with these stacked arguments
    function stackProps(i, elements, stacked = {}) {

      // Check if is latest component.
      // If is latest then render children,
      // Otherwise continue stacking arguments
      const childrenFn = props => i === 0
        ? children({ ...props, ...stacked }) 
        : stackProps(i - 1, elements, { ...props, ...stacked })

      return React.cloneElement(elements[i], {}, childrenFn)
    }

    return stackProps(elements.length - 1, elements)
  }
}

export default compose
