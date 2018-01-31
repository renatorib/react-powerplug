import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Active } from '../../src'

test('<Active />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Active render={renderFn} />)
  // TODO
})
