import * as React from 'react'
import renderProps from './renderProps'

const isElement = element => typeof element.type === 'function'
const name = element =>
  (isElement(element) ? element.type.name : element.name).toLowerCase()

const compose = (...elements) => {
  return composedProps => {
    // Stack children arguments recursively and pass
    // it down until the last component that render children
    // with these stacked arguments
    function stackProps(i, elements, stacked = {}) {
      const element = elements[i]
      const isTheLast = i === 0

      // Check if is latest component.
      // If is latest then render children,
      // Otherwise continue stacking arguments
      const renderFn = props =>
        isTheLast
          ? renderProps(composedProps, { [name(element)]: props, ...stacked })
          : stackProps(i - 1, elements, { [name(element)]: props, ...stacked })

      // Clone a element if it's passed created as <Element initial={} />
      // Or create it if passed as just Element
      const elementFn = isElement(element)
        ? React.cloneElement
        : React.createElement

      return elementFn(element, {}, renderFn)
    }

    return stackProps(elements.length - 1, elements)
  }
}

export default compose
