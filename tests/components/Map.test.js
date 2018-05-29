import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Map } from '../../src'
import { last } from './utils'

test('<Map />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Map initial={{ a: 0 }} render={renderFn} />)

  expect(renderFn).toHaveBeenCalledTimes(1)

  expect(lastCalled().get('a')).toBe(0)

  lastCalled().set('a', 1)
  expect(lastCalled().get('a')).toBe(1)

  lastCalled().over('a', d => d + 10)
  expect(lastCalled().get('a')).toBe(11)
})

test('<Map onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Map onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().set('a', 1)
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ a: 1 })
})
