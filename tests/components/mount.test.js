/* eslint-disable no-console */

import React from 'react'
import TestRenderer from 'react-test-renderer'
import * as PP from '../../src'

test('<Active />', () => {
  TestRenderer.create(<PP.Active />)
})
test('<Bind />', () => {
  TestRenderer.create(<PP.Bind />)
})
test('<Counter />', () => {
  TestRenderer.create(<PP.Counter />)
})
test('<Focus />', () => {
  TestRenderer.create(<PP.Focus />)
})
test('<Form />', () => {
  TestRenderer.create(<PP.Form />)
})
test('<Hover />', () => {
  TestRenderer.create(<PP.Hover />)
})
test('<List />', () => {
  TestRenderer.create(<PP.List />)
})
test('<Loading />', () => {
  TestRenderer.create(<PP.Loading />)
})
test('<State />', () => {
  TestRenderer.create(<PP.State />)
})
test('<Toggle />', () => {
  TestRenderer.create(<PP.Toggle />)
})

test('<Compose />', () => {
  TestRenderer.create(<PP.Compose states={[<PP.Toggle />, <PP.Counter />]} />)
})
