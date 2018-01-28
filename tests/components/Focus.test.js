import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Focus } from '../../src'

test('<Focus />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Focus render={renderFn} />)
  // TODO
})
