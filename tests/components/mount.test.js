/* eslint-disable no-console */

import React from 'react'
import PP from '../../src'
import { mount } from 'enzyme'

console.warn = jest.genMockFunction()
console.trace = jest.genMockFunction()

test('<Active />', () => { mount(<PP.Active />) })
test('<Bind />', () => { mount(<PP.Bind />) })
test('<Counter />', () => { mount(<PP.Counter />) })
test('<Focus />', () => { mount(<PP.Focus />) })
test('<Form />', () => { mount(<PP.Form />) })
test('<Hover />', () => { mount(<PP.Hover />) })
test('<Index />', () => { mount(<PP.Index />) })
test('<List />', () => { mount(<PP.List />) })
test('<Loading />', () => { mount(<PP.Loading />) })
test('<Set />', () => { mount(<PP.Set />) })
test('<State />', () => { mount(<PP.State />) })
test('<Toggle />', () => { mount(<PP.Toggle />) })
test('<Value />', () => { mount(<PP.Value />) })

test('<Compose />', () => { mount(<PP.Compose states={[<PP.Toggle />, <PP.Counter />]} />) })
