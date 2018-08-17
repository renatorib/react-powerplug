import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Map } from '../../src'
import { lastCallArg } from './utils'

test('<Map />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const testRenderer = TestRenderer.create(
    <Map initial={{ a: 0 }} render={renderFn} />
  )

  expect(renderFn).toBeCalledTimes(1)

  // get
  expect(lastCallArg(renderFn).get('a')).toBe(0)

  // set
  lastCallArg(renderFn).set('a', 1)
  expect(lastCallArg(renderFn).get('a')).toBe(1)

  lastCallArg(renderFn).set('a', d => d + 10)
  expect(lastCallArg(renderFn).get('a')).toBe(11)

  // reset
  testRenderer.update(<Map initial={{ a: 100 }} render={renderFn} />)
  expect(lastCallArg(renderFn).get('a')).toBe(11)

  lastCallArg(renderFn).reset()
  expect(lastCallArg(renderFn).get('a')).toBe(100)

  // has
  expect(lastCallArg(renderFn).has('a')).toBe(true)

  lastCallArg(renderFn).set('a', null)
  expect(lastCallArg(renderFn).has('a')).toBe(false)
  expect(lastCallArg(renderFn).has('b')).toBe(false)

  // clear
  lastCallArg(renderFn).set('a', 1)
  lastCallArg(renderFn).set('b', 2)
  expect(lastCallArg(renderFn).values).toEqual({ a: 1, b: 2 })

  lastCallArg(renderFn).clear()
  expect(lastCallArg(renderFn).values).toEqual({})

  // delete
  lastCallArg(renderFn).set('a', 1)
  lastCallArg(renderFn).set('b', 2)
  expect(lastCallArg(renderFn).values).toEqual({ a: 1, b: 2 })

  lastCallArg(renderFn).delete('a')
  expect(lastCallArg(renderFn).values).toEqual({ b: 2 })
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
