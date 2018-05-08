import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import { Reducer } from '../../src'
import { last } from './utils'

test('should handle dispatched actions', () => {
  const renderFn = jest.fn().mockReturnValue(null)

  const initial = { count: 0, somethingElse: 'whatever' }

  const actions = {
    incrementCount: (state, step = 1) => ({ count: state.count + step }),
  }

  TestRenderer.create(
    <Reducer actions={actions} initial={initial} render={renderFn} />
  )

  // Initial values
  expect(renderFn).lastCalledWith({
    state: { ...initial },
    dispatch: expect.any(Function),
  })

  last(renderFn.mock.calls)[0].dispatch('incrementCount', 10)
  expect(renderFn).lastCalledWith({
    state: { count: 10, somethingElse: 'whatever' },
    dispatch: expect.any(Function),
  })
})

test('should error if no action matches dispatched type', () => {
  const renderFn = jest.fn().mockReturnValue(null)

  TestRenderer.create(<Reducer render={renderFn} />)

  expect(() =>
    last(renderFn.mock.calls)[0].dispatch('notAnAction')
  ).toThrowErrorMatchingSnapshot()
})
