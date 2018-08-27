import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Form } from '../../src'
import { lastCallArg } from './utils'

test('<Form />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const testRenderer = TestRenderer.create(
    <Form initial={{ prop1: '1', prop2: 2 }} render={renderFn} />
  )

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ values: { prop1: '1', prop2: 2 } })
  )

  expect(lastCallArg(renderFn).field('prop1')).toEqual(
    expect.objectContaining({
      value: '1',
      bind: expect.objectContaining({ value: '1' }),
    })
  )
  expect(lastCallArg(renderFn).field('prop2')).toEqual(
    expect.objectContaining({
      value: 2,
      bind: expect.objectContaining({ value: 2 }),
    })
  )

  lastCallArg(renderFn)
    .field('prop1')
    .set('10')
  lastCallArg(renderFn)
    .field('prop2')
    .bind.onChange({ target: { value: 20 } })

  expect(lastCallArg(renderFn).field('prop1')).toEqual(
    expect.objectContaining({
      value: '10',
      bind: expect.objectContaining({ value: '10' }),
    })
  )
  expect(lastCallArg(renderFn).field('prop2')).toEqual(
    expect.objectContaining({
      value: 20,
      bind: expect.objectContaining({ value: 20 }),
    })
  )

  lastCallArg(renderFn)
    .field('prop1')
    .bind.onChange('100')
  lastCallArg(renderFn)
    .field('prop2')
    .bind.onChange({ target: 200 })

  expect(lastCallArg(renderFn).field('prop1')).toEqual(
    expect.objectContaining({
      value: '100',
      bind: expect.objectContaining({ value: '100' }),
    })
  )
  expect(lastCallArg(renderFn).field('prop2')).toEqual(
    expect.objectContaining({
      value: { target: 200 },
      bind: expect.objectContaining({ value: { target: 200 } }),
    })
  )

  testRenderer.update(<Form initial={{ hello: 'world' }} render={renderFn} />)

  expect(lastCallArg(renderFn).field('prop2')).toEqual(
    expect.objectContaining({
      value: { target: 200 },
      bind: expect.objectContaining({ value: { target: 200 } }),
    })
  )

  lastCallArg(renderFn).reset()

  expect(renderFn).lastCalledWith(
    expect.objectContaining({ values: { hello: 'world' } })
  )
})

test('Form setValues', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(
    <Form initial={{ prop1: 1, prop2: 2 }} render={renderFn} />
  )

  expect(lastCallArg(renderFn).values).toEqual({ prop1: 1, prop2: 2 })

  lastCallArg(renderFn).setValues({ prop1: 10 })

  expect(lastCallArg(renderFn).values).toEqual({ prop1: 10, prop2: 2 })

  lastCallArg(renderFn).setValues({ prop1: 100, prop2: 20, prop3: 3 })

  expect(lastCallArg(renderFn).values).toEqual({
    prop1: 100,
    prop2: 20,
    prop3: 3,
  })
})

test('<Form onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(
    <Form initial={{ prop: '1' }} onChange={onChangeFn} render={renderFn} />
  )

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn)
    .field('prop')
    .set('10')
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ prop: '10' })

  lastCallArg(renderFn)
    .field('prop')
    .bind.onChange({ target: { value: '100' } })
  expect(onChangeFn).toBeCalledTimes(2)
  expect(onChangeFn).lastCalledWith({ prop: '100' })
})
