import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Value } from '../../src'
import { lastCallArg } from './utils'

test('<Value />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const testRenderer = TestRenderer.create(
    <Value initial={{ a: 1 }} render={renderFn} />
  )

  expect(renderFn).toBeCalledTimes(1)

  expect(renderFn).lastCalledWith(expect.objectContaining({ value: { a: 1 } }))

  lastCallArg(renderFn).set({ b: 2 })
  expect(renderFn).lastCalledWith(expect.objectContaining({ value: { b: 2 } }))

  lastCallArg(renderFn).set(value => ({ ...value, a: 1 }))
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ value: { a: 1, b: 2 } })
  )

  lastCallArg(renderFn).set(0)
  expect(renderFn).lastCalledWith(expect.objectContaining({ value: 0 }))

  // test reset
  testRenderer.update(<Value initial={3} render={renderFn} />)
  expect(renderFn).lastCalledWith(expect.objectContaining({ value: 0 }))

  lastCallArg(renderFn).reset()
  expect(renderFn).lastCalledWith(expect.objectContaining({ value: 3 }))
})

test('<Value onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(
    <Value initial={0} onChange={onChangeFn} render={renderFn} />
  )

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).set(1)
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith(1)
})
