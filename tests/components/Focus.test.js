import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Focus } from '../../src'
import { lastCallArg } from './utils'

test('<Focus />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Focus render={renderFn} />)

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(expect.objectContaining({ focused: false }))

  lastCallArg(renderFn).bind.onFocus()
  expect(renderFn).toBeCalledTimes(2)
  expect(renderFn).lastCalledWith(expect.objectContaining({ focused: true }))

  lastCallArg(renderFn).bind.onBlur()
  expect(renderFn).lastCalledWith(expect.objectContaining({ focused: false }))
})

test('<Focus onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Focus onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).bind.onFocus()
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith(true)
})
