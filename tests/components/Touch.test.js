import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Touch } from '../../src'
import { last } from './utils'

test('<Touch />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Touch render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().isTouched).toEqual(false)

  lastCalled().bind.onTouchStart()
  expect(lastCalled().isTouched).toEqual(true)

  lastCalled().bind.onTouchEnd()
  expect(lastCalled().isTouched).toEqual(false)
})

test('<Touch onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Touch onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().bind.onTouchStart()
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ isTouched: true })
})
