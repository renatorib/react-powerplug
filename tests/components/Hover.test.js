import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Hover } from '../../src'

test('<Hover />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Hover render={renderFn} />)
  // TODO
})
