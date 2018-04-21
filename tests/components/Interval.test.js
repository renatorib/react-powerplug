import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { last } from './utils'
import { Interval } from '../../src'

jest.useFakeTimers()

test('<Interval />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const renderer = TestRenderer.create(
    <Interval delay={500}>{renderFn}</Interval>
  )
  const lastCalled = () => last(renderFn.mock.calls)[0]

  // Initial call
  expect(renderFn).toHaveBeenCalledTimes(1)

  jest.advanceTimersByTime(1000)

  renderer.update(<Interval delay={1000}>{renderFn}</Interval>)
  expect(renderFn).toHaveBeenCalledTimes(4)

  jest.advanceTimersByTime(2000)

  expect(renderFn).toHaveBeenCalledTimes(6)

  lastCalled().stop()
  jest.advanceTimersByTime(2000)
  expect(renderFn).toHaveBeenCalledTimes(6)

  lastCalled().start()
  jest.advanceTimersByTime(2000)
  expect(renderFn).toHaveBeenCalledTimes(8)

  lastCalled().toggle()
  jest.advanceTimersByTime(2000)
  expect(renderFn).toHaveBeenCalledTimes(8)

  lastCalled().toggle()
  jest.advanceTimersByTime(2000)
  expect(renderFn).toHaveBeenCalledTimes(10)
})
