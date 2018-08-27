import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Field } from '../../src'
import { lastCallArg } from './utils'

test('<Field />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const testRenderer = TestRenderer.create(
    <Field initial="init" render={renderFn} />
  )

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({
      value: 'init',
      bind: expect.objectContaining({ value: 'init' }),
    })
  )

  lastCallArg(renderFn).set('value2')
  expect(renderFn).toBeCalledTimes(2)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({
      value: 'value2',
      bind: expect.objectContaining({ value: 'value2' }),
    })
  )

  lastCallArg(renderFn).bind.onChange({ target: { value: 'value3' } })
  expect(renderFn).toBeCalledTimes(3)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({
      value: 'value3',
      bind: expect.objectContaining({ value: 'value3' }),
    })
  )

  testRenderer.update(<Field initial="hello" render={renderFn} />)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({
      value: 'value3',
      bind: expect.objectContaining({ value: 'value3' }),
    })
  )
  lastCallArg(renderFn).reset()

  expect(renderFn).lastCalledWith(
    expect.objectContaining({
      value: 'hello',
      bind: expect.objectContaining({ value: 'hello' }),
    })
  )
})

test('<Field onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Field onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).set('value')
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith('value')
})
