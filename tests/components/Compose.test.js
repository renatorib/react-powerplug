import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Compose, Counter, Toggle } from '../../src'
import { lastCallArgs } from './utils'

test('<Compose />', () => {
  const renderFn = jest.fn().mockReturnValue(null)

  TestRenderer.create(
    <Compose components={[Counter, Toggle]} render={renderFn} />
  )

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ count: 0 }),
    expect.objectContaining({ on: false })
  )

  lastCallArgs(renderFn)[0].inc()
  lastCallArgs(renderFn)[0].incBy(3)
  lastCallArgs(renderFn)[1].toggle()

  expect(renderFn).toBeCalledTimes(4)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ count: 4 }),
    expect.objectContaining({ on: true })
  )
})
