import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Hover } from '../../src'
import { last } from './utils'

test('<Hover />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Hover render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().isHovered).toEqual(false)

  lastCalled().bind.onMouseEnter()
  expect(renderFn).toHaveBeenCalledTimes(2)
  expect(lastCalled().isHovered).toEqual(true)

  lastCalled().bind.onMouseLeave()
  expect(lastCalled().isHovered).toEqual(false)
})

test('<Hover onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Hover onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().bind.onMouseEnter()
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ isHovered: true })
})
