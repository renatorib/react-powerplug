import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Focus } from '../../src'
import { last } from './utils'

test('<Focus />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Focus render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().isFocused).toEqual(false)

  lastCalled().bind.onFocus()
  expect(renderFn).toHaveBeenCalledTimes(2)
  expect(lastCalled().isFocused).toEqual(true)

  lastCalled().bind.onBlur()
  expect(lastCalled().isFocused).toEqual(false)
})

test('<Focus onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Focus onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().bind.onFocus()
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ isFocused: true })
})
