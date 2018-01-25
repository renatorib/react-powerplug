import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Counter } from '../../src'
import { last } from './utils'

test('<Counter />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Counter render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().count).toBe(0)

  lastCalled().inc()
  expect(lastCalled().count).toBe(1)

  lastCalled().incBy(5)
  expect(lastCalled().count).toBe(6)

  lastCalled().dec()
  expect(lastCalled().count).toBe(5)

  lastCalled().decBy(3)
  expect(lastCalled().count).toBe(2)
})
