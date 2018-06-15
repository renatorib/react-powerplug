import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { compose, Counter, Toggle } from '../../src'

test('rerender composed component', () => {
  const CounterToggle = compose(Counter, Toggle)
  const renderFn = jest.fn().mockReturnValue(null)
  let rerender = null

  TestRenderer.create(
    <Toggle>
      {({ on, toggle }) => {
        rerender = toggle

        return (
          // hard rerender
          <CounterToggle key={on} render={renderFn} />
        )
      }}
    </Toggle>
  )

  expect(renderFn).toBeCalledTimes(1)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ count: 0 }),
    expect.objectContaining({ on: false })
  )

  rerender()

  expect(renderFn).toBeCalledTimes(2)
  expect(renderFn).lastCalledWith(
    expect.objectContaining({ count: 0 }),
    expect.objectContaining({ on: false })
  )
})
