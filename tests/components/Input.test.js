import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Input } from '../../src'

test('<Input />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Input render={renderFn} />)
  // TODO
})
