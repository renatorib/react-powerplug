import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Interval } from '../../src'
import { lastCallArg } from './utils'

jest.useFakeTimers()

test('<Interval />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const renderer = TestRenderer.create(
    <Interval delay={500}>{renderFn}</Interval>
  )

  // Initial call
  expect(renderFn).toBeCalledTimes(1)

  jest.advanceTimersByTime(1000)

  renderer.update(<Interval delay={1000}>{renderFn}</Interval>)
  expect(renderFn).toBeCalledTimes(4)

  jest.advanceTimersByTime(2000)

  expect(renderFn).toBeCalledTimes(6)

  lastCallArg(renderFn).stop()
  jest.advanceTimersByTime(2000)
  expect(renderFn).toBeCalledTimes(6)

  lastCallArg(renderFn).start()
  jest.advanceTimersByTime(2000)
  expect(renderFn).toBeCalledTimes(8)

  lastCallArg(renderFn).toggle()
  jest.advanceTimersByTime(2000)
  expect(renderFn).toBeCalledTimes(8)

  lastCallArg(renderFn).toggle()
  jest.advanceTimersByTime(2000)
  expect(renderFn).toBeCalledTimes(10)
})
