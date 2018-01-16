/* eslint-disable no-console */

import { renderProps } from '../../src'

console.warn = jest.fn()
console.trace = jest.fn()

test('renderProps should use children prop when alone', () => {
  const props = { children: value => value + 1 }

  expect(renderProps(props, 1)).toBe(2)
})

test('renderProps should use render prop when alone', () => {
  const props = { render: value => value + 1 }

  expect(renderProps(props, 1)).toBe(2)
})

test('renderProps should use children when together and warns the user', () => {
  const props = { children: value => value + 1, render: value => value - 1 }

  expect(renderProps(props, 1)).toBe(2)
  expect(console.warn.mock.calls.length).toBe(1)
  expect(console.trace.mock.calls.length).toBe(1)
})
