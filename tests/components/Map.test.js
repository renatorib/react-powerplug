import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Map } from '../../src'
import { lastCallArg } from './utils'

test('<Map />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Map initial={{ a: 0 }} render={renderFn} />)

  expect(renderFn).toBeCalledTimes(1)

  expect(lastCallArg(renderFn).get('a')).toBe(0)

  lastCallArg(renderFn).set('a', 1)
  expect(lastCallArg(renderFn).get('a')).toBe(1)

  lastCallArg(renderFn).over('a', d => d + 10)
  expect(lastCallArg(renderFn).get('a')).toBe(11)
})

test('<Map onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Map onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).set('a', 1)
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ a: 1 })
})
