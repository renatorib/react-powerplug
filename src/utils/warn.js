/* eslint-disable no-console */

const isNotProd = process && process.env &&
  process.env.NODE_ENV && process.env.NODE_ENV !== 'production'

const warn = (condition, message) => {
  if (isNotProd && !!condition) {
    console.warn(`[react-powerplug]: ${message}`)
    console.trace && console.trace('Trace')
  }
}

export default warn
