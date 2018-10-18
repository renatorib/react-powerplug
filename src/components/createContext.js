import * as React from 'react'
import Value from './Value'

const createContext = (initial = {}) => {
  const context = React.createContext({})

  const Provider = ({ initial: initialAsProps, onChange, children }) =>
    <Value
      initial={
        initialAsProps
          ? initialAsProps
          : initial
      }
      onChange={onChange}
    >
      {({ value, set, reset }) =>
        <context.Provider
          value={{
            state: value,
            setState: (updater, cb) =>
              set(
                prev => ({
                  ...prev,
                  ...(typeof updater === 'function' ? updater(prev) : updater),
                }),
                cb
              ),
            resetState: reset,
          }}
          { ...{ children }}
        />
      }
    </Value>

    const { Consumer } = context
    return { Provider, Consumer }
}

export default createContext