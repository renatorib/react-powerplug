import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { State } from '../../src'
import { lastCallArg } from './utils'

test('<State />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const callbackFn = jest.fn()
  TestRenderer.create(<State initial={{ myValue: 1 }} render={renderFn} />)

  // Initial values
  expect(renderFn).lastCalledWith({
    state: { myValue: 1 },
    setState: expect.any(Function),
  })

  lastCallArg(renderFn).setState({ myValue: 2 })

  // Values after setState
  expect(renderFn).lastCalledWith({
    state: { myValue: 2 },
    setState: expect.any(Function),
  })

  // call callback only once
  lastCallArg(renderFn).setState({ myValue: 3 }, callbackFn)
  expect(callbackFn).toBeCalledTimes(1)
  lastCallArg(renderFn).setState({ myValue: 4 })
  expect(callbackFn).toBeCalledTimes(1)
})

test('<State onChange />', () => {
  const onChangeFn = jest.fn()
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(
    <State initial={{ myValue: 1 }} onChange={onChangeFn} render={renderFn} />
  )

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).setState({ myValue: 2 })
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).toBeCalledWith({ myValue: 2 })
})
