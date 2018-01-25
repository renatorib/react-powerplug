const set = (updater, arg) =>
  typeof updater === 'function' ? updater(arg) : updater

export default set
