import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { State } from '../../src'
import { last } from './utils'

test('<State />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<State initial={{ myValue: 1 }} render={renderFn} />)

  // Initial values
  expect(renderFn).lastCalledWith({
    state: { myValue: 1 },
    setState: expect.any(Function),
  })

  last(renderFn.mock.calls)[0].setState({ myValue: 2 })

  // Values after setState
  expect(renderFn).lastCalledWith({
    state: { myValue: 2 },
    setState: expect.any(Function),
  })
})

test('<State onChange />', () => {
  const onChangeFn = jest.fn()
  const renderFn = jest.fn().mockReturnValue(null)
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(
    <State initial={{ myValue: 1 }} onChange={onChangeFn} render={renderFn} />
  )

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().setState({ myValue: 2 })
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).toBeCalledWith({ myValue: 2 })
})
