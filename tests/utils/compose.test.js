import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { compose, Counter, Toggle } from '../../src'

test('rerender composed component', () => {
  const CounterToggle = compose(Counter, Toggle)

  let lastCallProps = null
  let rerender = null
  const renderFn = (...props) => {
    lastCallProps = props
    return null
  }

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

  expect(lastCallProps[0].count).toBe(0)
  expect(lastCallProps[1].on).toBe(false)

  rerender()

  expect(lastCallProps[0].count).toBe(0)
  expect(lastCallProps[1].on).toBe(false)
})
