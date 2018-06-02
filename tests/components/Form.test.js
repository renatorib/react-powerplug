import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Form } from '../../src'
import { lastCallArg } from './utils'

test('<Form />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(
    <Form initial={{ prop1: '1', prop2: '2' }} render={renderFn} />
  )

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ values: { prop1: '1', prop2: '2' } })
  )

  expect(lastCallArg(renderFn).input('prop1')).toEqual(
    expect.objectContaining({
      value: '1',
      bind: expect.objectContaining({ value: '1' }),
    })
  )
  expect(lastCallArg(renderFn).input('prop2')).toEqual(
    expect.objectContaining({
      value: '2',
      bind: expect.objectContaining({ value: '2' }),
    })
  )

  lastCallArg(renderFn)
    .input('prop1')
    .set('10')
  lastCallArg(renderFn)
    .input('prop2')
    .bind.onChange({ target: { value: '20' } })

  expect(lastCallArg(renderFn).input('prop1')).toEqual(
    expect.objectContaining({
      value: '10',
      bind: expect.objectContaining({ value: '10' }),
    })
  )
  expect(lastCallArg(renderFn).input('prop2')).toEqual(
    expect.objectContaining({
      value: '20',
      bind: expect.objectContaining({ value: '20' }),
    })
  )
})

test('<Form onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(
    <Form initial={{ prop: '1' }} onChange={onChangeFn} render={renderFn} />
  )

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn)
    .input('prop')
    .set('10')
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ prop: '10' })

  lastCallArg(renderFn)
    .input('prop')
    .bind.onChange({ target: { value: '100' } })
  expect(onChangeFn).toBeCalledTimes(2)
  expect(onChangeFn).lastCalledWith({ prop: '100' })
})
