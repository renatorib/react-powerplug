import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Debounce } from '../../src'
import { lastCallArg } from './utils'

jest.useFakeTimers()

test('<Debounce />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const method = jest.fn()
  const nextMethod = jest.fn()
  const renderer = TestRenderer.create(
    <Debounce method={method} timer={500}>
      {renderFn}
    </Debounce>
  )

  expect(renderFn).toBeCalledTimes(1)

  lastCallArg(renderFn).fn('first')
  lastCallArg(renderFn).fn('second')

  jest.advanceTimersByTime(499)
  expect(method).not.toBeCalled()

  jest.advanceTimersByTime(1)
  expect(method).toBeCalledTimes(1)
  expect(method).toBeCalledWith('second')

  renderer.update(<Debounce fn={nextMethod} wait={200} render={renderFn} />)
  lastCallArg(renderFn).fn('third')
  lastCallArg(renderFn).cancel()

  jest.advanceTimersByTime(200)
  expect(nextMethod).not.toBeCalled()

  lastCallArg(renderFn).fn('fourth')
  renderer.unmount()

  jest.advanceTimersByTime(200)
  expect(nextMethod).not.toBeCalled()
})
