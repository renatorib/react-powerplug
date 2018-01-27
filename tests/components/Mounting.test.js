import React from 'react'
import TestRenderer from 'react-test-renderer'
import { Mounting } from '../../src'

test('<Mounting />', () => {
  const mountFn = jest.fn().mockReturnValue({ param: 1 })
  const unmountFn = jest.fn()
  const renderer = TestRenderer.create(
    <Mounting onMount={mountFn} onUnmount={unmountFn}>
      {null}
    </Mounting>
  )

  expect(mountFn).toHaveBeenCalledTimes(1)
  expect(unmountFn).toHaveBeenCalledTimes(0)

  renderer.unmount()
  expect(mountFn).toHaveBeenCalledTimes(1)
  expect(unmountFn).toHaveBeenCalledTimes(1)
  expect(unmountFn).lastCalledWith({ param: 1 })
})

test('<Mounting /> without callbacks', () => {
  const renderer = TestRenderer.create(<Mounting>{null}</Mounting>)
  renderer.unmount()
})
