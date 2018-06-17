import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Hover } from '../../src'
import { lastCallArg } from './utils'

test('<Hover />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Hover render={renderFn} />)

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(expect.objectContaining({ hovered: false }))

  lastCallArg(renderFn).bind.onMouseEnter()
  expect(renderFn).toBeCalledTimes(2)
  expect(renderFn).lastCalledWith(expect.objectContaining({ hovered: true }))

  lastCallArg(renderFn).bind.onMouseLeave()
  expect(renderFn).lastCalledWith(expect.objectContaining({ hovered: false }))
})

test('<Hover onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Hover onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).bind.onMouseEnter()
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith(true)
})
