import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { List } from '../../src'
import { lastCallArg } from './utils'

test('<List />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<List initial={[1]} render={renderFn} />)

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(expect.objectContaining({ list: [1] }))

  lastCallArg(renderFn).push(8)
  expect(renderFn).lastCalledWith(expect.objectContaining({ list: [1, 8] }))

  lastCallArg(renderFn).set([9, 2, 3, 4])
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ list: [9, 2, 3, 4] })
  )

  lastCallArg(renderFn).set(list => [...list, 5])
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ list: [9, 2, 3, 4, 5] })
  )

  const listBeforeSort = lastCallArg(renderFn).list
  lastCallArg(renderFn).sort()
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ list: [2, 3, 4, 5, 9] })
  )
  expect(listBeforeSort).toEqual([9, 2, 3, 4, 5])

  lastCallArg(renderFn).pull(d => d % 2)
  expect(renderFn).lastCalledWith(expect.objectContaining({ list: [2, 4] }))

  expect(lastCallArg(renderFn).first()).toEqual(2)
  expect(lastCallArg(renderFn).last()).toEqual(4)

  lastCallArg(renderFn).set([])
  expect(lastCallArg(renderFn).first()).toEqual(undefined)
  expect(lastCallArg(renderFn).last()).toEqual(undefined)

  // support pushing many array
  lastCallArg(renderFn).push(1, 2, 3)
  expect(renderFn).lastCalledWith(expect.objectContaining({ list: [1, 2, 3] }))
})

test('<List onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<List onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).set([1])
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ list: [1] })
})
