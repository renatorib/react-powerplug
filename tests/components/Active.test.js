import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Active } from '../../src'
import { lastCallArg } from './utils'

test('<Active />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Active render={renderFn} />)

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(expect.objectContaining({ isActive: false }))

  lastCallArg(renderFn).bind.onMouseDown()
  expect(renderFn).toBeCalledTimes(2)
  expect(renderFn).lastCalledWith(expect.objectContaining({ isActive: true }))

  lastCallArg(renderFn).bind.onMouseUp()
  expect(renderFn).lastCalledWith(expect.objectContaining({ isActive: false }))
})

test('<Active onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Active onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).bind.onMouseDown()
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith(true)
})
