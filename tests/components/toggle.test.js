import React from 'react'
import { Toggle } from '../../src'
import { mount } from 'enzyme'

test('Toggle must mount and toggle on value', () => {
  let loop = false
  mount(
    <Toggle>{({ on, toggle }) => {
      expect(on).toBe(loop === false ? false : true)

      if (loop === false) {
        loop = true
        setTimeout(toggle, 1)
      }

      return null
    }}</Toggle>
  )
})
