/* eslint-disable no-console */

const warn = (condition, message, trace = true) => {
  if (condition) {
    console.warn(`[react-powerplug]: ${message}`)
    console.trace && trace && console.trace('Trace')
  }
}

export default warn
