import React from 'react'
import TestRenderer from 'react-test-renderer'
import * as plug from '../../src'
import { last } from './utils'

test('<Set />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<plug.Set initial={[1, 2, 3, 1, 3]} render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)

  expect(lastCalled().has(1)).toBe(true)
  expect(lastCalled().has(4)).toBe(false)
  expect(lastCalled().values).toEqual([1, 2, 3])

  lastCalled().add(4)
  lastCalled().add(4)
  expect(lastCalled().has(4)).toBe(true)
  expect(lastCalled().values).toEqual([1, 2, 3, 4])

  lastCalled().remove(1)
  expect(lastCalled().has(1)).toBe(false)
  expect(lastCalled().values).toEqual([2, 3, 4])

  lastCalled().clear()
  expect(lastCalled().has(2)).toBe(false)
  expect(lastCalled().has(3)).toBe(false)
  expect(lastCalled().has(4)).toBe(false)
  expect(lastCalled().values).toEqual([])
})
