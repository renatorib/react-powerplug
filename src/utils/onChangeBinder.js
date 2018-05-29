const onChangeBinder = prop => state =>
  typeof state[prop] !== 'undefined' ? state[prop] : state

export default onChangeBinder
