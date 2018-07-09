/* eslint-disable no-console */

const logger = (store = 'Unknown Store') => (newState, oldState) => {
  console.group(`%c logger%c ${store}`, 'color: #AAAAAA', 'color: #001B44')
  console.log('%c old state', 'color: #E7040F', oldState)
  console.log('%c new state', 'color: #19A974', newState)
  console.groupEnd()
}

export default logger
