import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Toggle } from '../../src'
import { lastCallArg } from './utils'

test('<Toggle />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const testRenderer = TestRenderer.create(<Toggle render={renderFn} />)

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(expect.objectContaining({ on: false }))

  lastCallArg(renderFn).toggle()
  expect(renderFn).lastCalledWith(expect.objectContaining({ on: true }))

  lastCallArg(renderFn).set(false)
  expect(renderFn).lastCalledWith(expect.objectContaining({ on: false }))

  lastCallArg(renderFn).set(on => !on)
  expect(renderFn).lastCalledWith(expect.objectContaining({ on: true }))

  testRenderer.update(<Toggle initial={false} render={renderFn} />)
  expect(renderFn).lastCalledWith(expect.objectContaining({ on: true }))

  lastCallArg(renderFn).reset()
  expect(renderFn).lastCalledWith(expect.objectContaining({ on: false }))
})

test('<Toggle onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(
    <Toggle initial={false} onChange={onChangeFn} render={renderFn} />
  )

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).set(true)
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith(true)
})
