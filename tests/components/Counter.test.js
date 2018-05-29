import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Counter } from '../../src'
import { lastCallArg } from './utils'

test('<Counter />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Counter render={renderFn} />)

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(expect.objectContaining({ count: 0 }))

  lastCallArg(renderFn).inc()
  expect(renderFn).lastCalledWith(expect.objectContaining({ count: 1 }))

  lastCallArg(renderFn).incBy(5)
  expect(renderFn).lastCalledWith(expect.objectContaining({ count: 6 }))

  lastCallArg(renderFn).dec()
  expect(renderFn).lastCalledWith(expect.objectContaining({ count: 5 }))

  lastCallArg(renderFn).decBy(3)
  expect(renderFn).lastCalledWith(expect.objectContaining({ count: 2 }))
})

test('<Counter onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Counter onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).inc()
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith(1)
})
