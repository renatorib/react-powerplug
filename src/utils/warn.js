/* eslint-disable no-console */

const hasEnv = process && process.env

const isNotProd = hasEnv && process.env.NODE_ENV !== 'production'

const warn = (condition, message, trace = true) => {
  if (isNotProd && !!condition) {
    console.warn(`[react-powerplug]: ${message}`)
    console.trace && trace && console.trace('Trace')
  }
}

export default warn
