import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Form } from '../../src'

test('<Form />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Form render={renderFn} />)
  // TODO
})
