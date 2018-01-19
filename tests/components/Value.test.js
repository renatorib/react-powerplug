import React from 'react'
import TestRenderer from 'react-test-renderer'
import * as plug from '../../src'
import { last } from './utils'

test('<Value />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<plug.Value initial={{ a: 1 }} render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)

  expect(lastCalled().value).toEqual({ a: 1 })
  lastCalled().setValue({ b: 2 })

  expect(lastCalled().value).toEqual({ b: 2 })

  lastCalled().setValue(0)

  expect(lastCalled().value).toEqual(0)
})
