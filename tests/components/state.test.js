import React from 'react'
import { State } from '../../src'
import { mount } from 'enzyme'

it('State integration test', () => {
  let sideValue = 0;
  const wrapper = mount(
    <State
      initial={{ myValue: 1 }}
      onChange={(state) => { sideValue = state.myValue }}
    >
      {({ state, setState }) => (
        <div
          data-setState
          onClick={() => setState(prev => ({ myValue: prev.myValue + 1 }))}
        >
          {JSON.stringify(state)}
        </div>
      )}
    </State>
  )

  // Initial values
  expect(JSON.parse(wrapper.text())).toEqual({ myValue: 1 })
  expect(sideValue).toBe(0)

  wrapper.find('[data-setState]').simulate('click')

  // Values after onClick
  expect(JSON.parse(wrapper.text())).toEqual({ myValue: 2 })
  expect(sideValue).toBe(2)
})
