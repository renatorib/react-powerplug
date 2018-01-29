import React from 'react'
import TestRenderer from 'react-test-renderer'
import { List } from '../../src'
import { last } from './utils'

test('<List />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<List initial={[1]} render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().list).toEqual([1])

  lastCalled().push(8)
  expect(lastCalled().list).toEqual([1, 8])

  lastCalled().setList([5, 4, 1, 6, 9])
  expect(lastCalled().list).toEqual([5, 4, 1, 6, 9])

  const listBeforeSort = lastCalled().list
  lastCalled().sort()
  expect(lastCalled().list).toEqual([1, 4, 5, 6, 9])
  expect(listBeforeSort).toEqual([5, 4, 1, 6, 9])

  lastCalled().pull(d => d % 2)
  expect(lastCalled().list).toEqual([4, 6])

  expect(lastCalled().first()).toEqual(4)
  expect(lastCalled().last()).toEqual(6)
  lastCalled().setList([])
  expect(lastCalled().first()).toEqual(undefined)
  expect(lastCalled().last()).toEqual(undefined)
})
