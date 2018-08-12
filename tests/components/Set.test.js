import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Set } from '../../src'
import { lastCallArg } from './utils'

test('<Set />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const testRenderer = TestRenderer.create(
    <Set initial={[1, 2, 3, 1, 3]} render={renderFn} />
  )

  expect(renderFn).toBeCalledTimes(1)

  expect(lastCallArg(renderFn).has(1)).toBe(true)
  expect(lastCallArg(renderFn).has(4)).toBe(false)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ values: [1, 2, 3] })
  )

  lastCallArg(renderFn).add(4)
  lastCallArg(renderFn).add(4)
  expect(lastCallArg(renderFn).has(4)).toBe(true)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ values: [1, 2, 3, 4] })
  )

  lastCallArg(renderFn).remove(1)
  expect(lastCallArg(renderFn).has(1)).toBe(false)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ values: [2, 3, 4] })
  )

  lastCallArg(renderFn).clear()
  expect(lastCallArg(renderFn).has(2)).toBe(false)
  expect(lastCallArg(renderFn).has(3)).toBe(false)
  expect(lastCallArg(renderFn).has(4)).toBe(false)
  expect(renderFn).lastCalledWith(expect.objectContaining({ values: [] }))

  testRenderer.update(<Set initial={[2]} render={renderFn} />)
  expect(renderFn).lastCalledWith(expect.objectContaining({ values: [] }))

  lastCallArg(renderFn).reset()
  expect(renderFn).lastCalledWith(expect.objectContaining({ values: [2] }))
})

test('<Set onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Set onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).add(1)
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith([1])
})
