const composeEvents = (...objEvents) => {
  return objEvents.reverse().reduce((allEvents, events) => {
    let append = {}

    for (const key in events) {
      append[key] = allEvents[key]
        ? // Already have this event: let's merge
          (...args) => {
            events[key](...args)
            allEvents[key](...args)
          }
        : // Don't have this event yet: just assign the event
          events[key]
    }

    return { ...allEvents, ...append }
  })
}

export default composeEvents
