import * as React from 'react'
import renderProps from './renderProps'

const isElement = element => typeof element.type === 'function'

const compose = (...elements) => {
  const reversedElements = elements.reverse()

  return composedProps => {
    // Stack children arguments recursively and pass
    // it down until the last component that render children
    // with these stacked arguments
    function stackProps(i, elements, propsList = []) {
      const element = elements[i]
      const isTheLast = i === 0

      // Check if is latest component.
      // If is latest then render children,
      // Otherwise continue stacking arguments
      const renderFn = props =>
        isTheLast
          ? renderProps(composedProps, ...propsList.concat(props))
          : stackProps(i - 1, elements, propsList.concat(props))

      // Clone a element if it's passed created as <Element initial={} />
      // Or create it if passed as just Element
      const elementFn = isElement(element)
        ? React.cloneElement
        : React.createElement

      return elementFn(element, {}, renderFn)
    }

    return stackProps(elements.length - 1, reversedElements)
  }
}

export default compose
