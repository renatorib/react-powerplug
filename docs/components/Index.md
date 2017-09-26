# Index

The Index component is a generic component to store a some index value. For example, save what tab is selected from a dumb `Tabs` component.

```js
import { Index } from 'react-powerplug'
``` 

```jsx
<Index initial={0}>
  {({ index, setIndex }) => (
    <Tabs selected={index} onChange={setIndex}>
      <Tab title="First tab">
        Content from the first tab
      </Tab>
      <Tab title="Second tab">
        Content from the second tab
      </Tab>
    </Tabs>
  )}
</Index>
``` 

## Index Props

**initial = 0** *(optional)*  
Specifies the initial index state, must be an number.  
By default, the initial index state is 0.

## Index Children Props

TL;DR: `{ index, setIndex }`

**index**  
`number`  
Your index state

**setIndex**  
`(index: number) => void`  
Set the index state


