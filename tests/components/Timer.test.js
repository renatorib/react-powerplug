import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Timer } from '../../src'

jest.useFakeTimers()

test('<Timer />', () => {
  const startTime = Date.now()
  const renderFn = jest.fn().mockReturnValue(null)
  const renderer = TestRenderer.create(
    <Timer delay={500}>
      {renderFn}
    </Timer>
  )

  // Initial call
  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(renderFn.mock.calls[0][0].time).toBeGreaterThanOrEqual(startTime)

  jest.advanceTimersByTime(1250)

  renderer.update(
    <Timer delay={1000}>
      {renderFn}
    </Timer>
  )
  expect(renderFn).toHaveBeenCalledTimes(4)

  jest.advanceTimersByTime(2500)

  expect(renderFn).toHaveBeenCalledTimes(6)
 })

