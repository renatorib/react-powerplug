import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Touch } from '../../src'

test('<Touch />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Touch render={renderFn} />)
  // TODO
})
