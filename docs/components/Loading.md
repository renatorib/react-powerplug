# Loading

The Loading component is used to toggle a loading state.  
In practice, this does the same as `Toggle` but with contextualized names.

```js
import { Loading } from 'react-powerplug'
``` 

```jsx
<Loading initial={false}>
  {({ isLoading, toggleLoading }) => (
    <Button onClick={toggleLoading}>
      {isLoading ? 'Loading...' : 'Click me'}
    </Button>
  )}
</Loading>
``` 

## Loading Props

**initial = false** *(optional)*  
Specifies the initial isLoading state, must be a boolean.
By default, the initial isLoading state is false.

## Loading Children Props

TL;DR: `{ isLoading, toggleLoading, setLoadingOn, setLoadingOff }`

**isLoading**  
`boolean`  
Your isLoading state

**toggleLoading**  
`() => void`  
Toggle isLoading value

**setLoading**  
`(loading: boolean) => void`  
Set arbitrary isLoading to true/false
