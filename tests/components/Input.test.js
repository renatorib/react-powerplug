import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Input } from '../../src'
import { lastCallArg } from './utils'

test('<Input />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Input initial="init" render={renderFn} />)

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
})

test('<Input onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  TestRenderer.create(<Input onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toBeCalledTimes(0)

  lastCallArg(renderFn).set('value')
  expect(onChangeFn).toBeCalledTimes(1)
  expect(onChangeFn).lastCalledWith('value')
})
