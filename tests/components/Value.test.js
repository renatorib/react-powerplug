import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Value } from '../../src'
import { last } from './utils'

test('<Value />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Value initial={{ a: 1 }} render={renderFn} />)

  expect(renderFn).toHaveBeenCalledTimes(1)

  expect(lastCalled().value).toEqual({ a: 1 })

  lastCalled().set({ b: 2 })
  expect(lastCalled().value).toEqual({ b: 2 })

  lastCalled().set(value => ({ ...value, a: 1 }))
  expect(lastCalled().value).toEqual({ a: 1, b: 2 })

  lastCalled().set(0)
  expect(lastCalled().value).toEqual(0)
})

test('<Value onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(
    <Value initial={0} onChange={onChangeFn} render={renderFn} />
  )

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().set(1)
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ value: 1 })
})
