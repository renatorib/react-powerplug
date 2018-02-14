import * as React from 'react'
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

  lastCalled().set([9, 2, 3, 4])
  expect(lastCalled().list).toEqual([9, 2, 3, 4])

  lastCalled().set(list => [...list, 5])
  expect(lastCalled().list).toEqual([9, 2, 3, 4, 5])

  const listBeforeSort = lastCalled().list
  lastCalled().sort()
  expect(lastCalled().list).toEqual([2, 3, 4, 5, 9])
  expect(listBeforeSort).toEqual([9, 2, 3, 4, 5])

  lastCalled().pull(d => d % 2)
  expect(lastCalled().list).toEqual([2, 4])

  expect(lastCalled().first()).toEqual(2)
  expect(lastCalled().last()).toEqual(4)

  lastCalled().set([])
  expect(lastCalled().first()).toEqual(undefined)
  expect(lastCalled().last()).toEqual(undefined)
})
