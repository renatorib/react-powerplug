import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Active } from '../../src'
import { last } from './utils'

test('<Active />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Active render={renderFn} />)

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().isActive).toEqual(false)

  lastCalled().bind.onMouseDown()
  expect(renderFn).toHaveBeenCalledTimes(2)
  expect(lastCalled().isActive).toEqual(true)

  lastCalled().bind.onMouseUp()
  expect(lastCalled().isActive).toEqual(false)
})

test('<Active onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Active onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().bind.onMouseDown()
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ isActive: true })
})
