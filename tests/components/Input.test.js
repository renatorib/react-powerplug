import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Input } from '../../src'
import { last } from './utils'

test('<Input />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<Input initial="init" render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)
  expect(lastCalled().value).toEqual('init')
  expect(lastCalled().bind.value).toEqual('init')

  lastCalled().set('value2')
  expect(renderFn).toHaveBeenCalledTimes(2)
  expect(lastCalled().value).toEqual('value2')
  expect(lastCalled().bind.value).toEqual('value2')

  lastCalled().bind.onChange({ target: { value: 'value3' } })
  expect(renderFn).toHaveBeenCalledTimes(3)
  expect(lastCalled().value).toEqual('value3')
  expect(lastCalled().bind.value).toEqual('value3')
})

test('<Input onChange />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  const onChangeFn = jest.fn()
  const lastCalled = () => last(renderFn.mock.calls)[0]
  TestRenderer.create(<Input onChange={onChangeFn} render={renderFn} />)

  expect(onChangeFn).toHaveBeenCalledTimes(0)

  lastCalled().set('value')
  expect(onChangeFn).toHaveBeenCalledTimes(1)
  expect(onChangeFn).lastCalledWith({ value: 'value' })
})
