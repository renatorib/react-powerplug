import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Throttle } from '../../src'
import { lastCallArg } from './utils'

jest.useFakeTimers()

test('<Throttle />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const method = jest.fn()
  const nextMethod = jest.fn()
  const renderer = TestRenderer.create(
    <Throttle method={method} timer={500}>
      {renderFn}
    </Throttle>
  )

  expect(renderFn).toBeCalledTimes(1)

  lastCallArg(renderFn).fn('first')
  expect(method).toBeCalledTimes(1)
  expect(method).toBeCalledWith('first')

  lastCallArg(renderFn).fn('second')
  lastCallArg(renderFn).fn('third')
  expect(method).toBeCalledTimes(1)

  jest.advanceTimersByTime(500)
  expect(method).toBeCalledTimes(2)
  expect(method).toBeCalledWith('third')

  renderer.update(<Throttle fn={nextMethod} wait={200} render={renderFn} />)
  lastCallArg(renderFn).fn('fourth')
  lastCallArg(renderFn).cancel()

  jest.advanceTimersByTime(500)
  expect(nextMethod).not.toBeCalled()

  lastCallArg(renderFn).fn('fifth')
  expect(nextMethod).toBeCalledTimes(1)
  expect(nextMethod).toBeCalledWith('fifth')

  lastCallArg(renderFn).fn('sixth')
  renderer.unmount()

  jest.advanceTimersByTime(200)
  expect(nextMethod).toBeCalledTimes(1)
})
