import React from 'react'
import renderProps from './renderProps'

const compose = (...elements) => {
  return composedProps => {

    // Stack children arguments recursively and pass
    // it down until the last component that render children
    // with these stacked arguments
    function stackProps(i, elements, stacked = {}) {

      // Check if is latest component.
      // If is latest then render children,
      // Otherwise continue stacking arguments
      const renderFn = props => i === 0
        ? renderProps(composedProps, { ...props, ...stacked }) 
        : stackProps(i - 1, elements, { ...props, ...stacked })

      return React.cloneElement(elements[i], {}, renderFn)
    }

    return stackProps(elements.length - 1, elements)
  }
}

export default compose
