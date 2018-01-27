# Mounting

The Mounting component is an utility component used to track mount and unmount events of its subtree.

```js
import { Mounting, Value } from 'react-powerplug'
```

```jsx
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
        return handler
      }}
      onUnmount={handler => {
        window.removeEventListener('resize', handler)
      }}
    >
      <div style={value}>content</div>
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
