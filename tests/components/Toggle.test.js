import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Toggle } from '../../src'
import { last } from './utils'

test('<Toggle />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Toggle render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().on).toBe(false)

  lastCalled().toggle()
  expect(lastCalled().on).toBe(true)

  lastCalled().set(false)
  expect(lastCalled().on).toBe(false)

  lastCalled().set(on => !on)
  expect(lastCalled().on).toBe(true)
})
