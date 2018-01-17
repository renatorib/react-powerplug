/* eslint-disable no-console */

import React from 'react'
import TestRenderer from 'react-test-renderer'
import PP from '../../src'
import { last } from './utils'

test('<Map />', () => {
  const renderFn = jest.fn().mockReturnValue(null)
  TestRenderer.create(<PP.Map initial={{ a: 0 }} render={renderFn} />)
  const lastCalled = () => last(renderFn.mock.calls)[0]

  expect(renderFn).toHaveBeenCalledTimes(1)

  expect(lastCalled().get('a')).toBe(0)

  lastCalled().set('a', 1)
  expect(lastCalled().get('a')).toBe(1)

  lastCalled().over('a', d => d + 10)
  expect(lastCalled().get('a')).toBe(11)
})
