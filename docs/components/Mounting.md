# Mounting

The Mounting component is an utility component used to track mount and unmount events of its subtree.

## Example with ResizeObserver API

```js
import { Mounting, Value } from 'react-powerplug'

<Value initial={{ width: 0, height: 0 }}>
  {({ value, setValue }) => (
    <Mounting
      onMount={({ ref }) => {
        const observer = new ResizeObserver(([entry]) => {
          setValue({
            width: entry.contentRect.width,
            height: entry.contentRect.height
          })
        })
        return { observer }
      }}
      onUnmount={({ observer }) => {
        observer.disconnect()
      }}
    >
      {({ setRef }) => (
        <div ref={setRef} style={value}>content</div>
      )}
    </Mounting>
  )}
</Value>
```

## Example with `window.onresize`

```js
import { Mounting, Value } from 'react-powerplug'

<Value initial={{ width: 0, height: 0 }}>
  {({ value, setValue }) => (
    <Mounting
      onMount={() => {
        const handler = () => {
          setValue({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        }
        window.addEventListener('resize', handler)
        return {
          removeListener: () => {
            window.removeEventListener('resize', handler)
          }
        };
      }}
      onUnmount={({ removeListener }) => {
        removeListener();
      }}
    >
      {() => (
        <div style={value}>content</div>
      })
    </Mounting>
  )}
</Value>
```

## Mounting Props

**onMount** _(optional)_  
`() => T`  
Mount callback. May return value which will be passed to onUnmount.

**onUnmount** _(optional)_  
`(T) => void`  
Unmount callback. Accepts value returned from onMount.
