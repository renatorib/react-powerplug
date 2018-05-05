import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Toggle } from '../../src'
import { last } from './utils'

test('<Toggle />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Toggle render={renderFn} />)

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().on).toBe(false)

  lastCalled().toggle()
  expect(lastCalled().on).toBe(true)

  lastCalled().set(false)
  expect(lastCalled().on).toBe(false)

  lastCalled().set(on => !on)
  expect(lastCalled().on).toBe(true)
})

test('<Toggle onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(
    <Toggle initial={false} onChange={onChangeFn} render={renderFn} />
  )

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().set(true)
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ on: true })
})
