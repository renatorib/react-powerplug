import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Touch } from '../../src'
import { lastCallArg } from './utils'

test('<Touch />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Touch render={renderFn} />)

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(expect.objectContaining({ isTouched: false }))

  lastCallArg(renderFn).bind.onTouchStart()
  expect(renderFn).lastCalledWith(expect.objectContaining({ isTouched: true }))

  lastCallArg(renderFn).bind.onTouchEnd()
  expect(renderFn).lastCalledWith(expect.objectContaining({ isTouched: false }))
})

test('<Touch onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Touch onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).bind.onTouchStart()
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith(true)
})
