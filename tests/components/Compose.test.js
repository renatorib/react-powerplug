import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Compose, Counter, Toggle } from '../../src'

test('<Compose />', () => {
  let lastCallProps = null
  const renderFn = (...props) => {
    lastCallProps = props
    return null
  }

  TestRenderer.create(<Compose states={[Counter, Toggle]} render={renderFn} />)

  expect(lastCallProps[0].count).toBe(0)
  expect(lastCallProps[1].on).toBe(false)

  lastCallProps[0].inc()
  lastCallProps[0].incBy(3)
  lastCallProps[1].toggle()

  expect(lastCallProps[0].count).toBe(4)
  expect(lastCallProps[1].on).toBe(true)
})
