/* eslint-disable */
// @flow

import * as React from 'react'
import {
  Active,
  Bind,
  Counter,
  Focus,
  Form,
  Hover,
  List,
  Loading,
  Map,
  Set,
  State,
  Toggle,
  Value,
} from '../src'

const noop = () => null

{
  const render = ({ isActive, bindActive }) => {
    ;(isActive: boolean)
    ;(bindActive.onMouseDown: Function)
    ;(bindActive.onMouseUp: Function)
    // $FlowFixMe
    ;(isActive: number)
    // $FlowFixMe
    ;(bindActive.onMouseDown: number)
    // $FlowFixMe
    ;(bindActive.onMouseUp: number)
    return null
  }
  const onChange = ({ isActive }) => {
    ;(isActive: boolean)
    // $FlowFixMe
    ;(isActive: number)
  }
  ;[
    <Active render={render} />,
    <Active>{render}</Active>,
    <Active onChange={onChange} render={noop} />,
    <Active onChange={onChange}>{noop}</Active>,
    // $FlowFixMe
    <Active />,
  ]
}

{
  const render = ({ value, setValue, bind }) => {
    ;(value: string)
    setValue('')
    ;(bind.value: string)
    ;(bind.onChange: Function)
    // $FlowFixMe
    ;(value: number)
    // $FlowFixMe
    setValue(0)
    // $FlowFixMe
    ;(bind.value: number)
    // $FlowFixMe
    ;(bind.onChange: number)
    return null
  }
  const onChange = ({ value }) => {
    ;(value: string)
    // $FlowFixMe
    ;(value: number)
  }
  ;[
    <Bind render={render} />,
    <Bind>{render}</Bind>,
    <Bind onChange={onChange} render={noop} />,
    <Bind onChange={onChange}>{noop}</Bind>,
    <Bind initial={''} render={noop} />,
    // $FlowFixMe
    <Bind />,
    // $FlowFixMe
    <Bind initial={0} render={noop} />,
  ]
}

{
  const render = ({ count, inc, dec, incBy, decBy }) => {
    ;(count: number)
    inc()
    dec()
    incBy(0)
    decBy(0)
    // $FlowFixMe
    ;(count: string)
    // $FlowFixMe
    inc('')
    // $FlowFixMe
    dec('')
    // $FlowFixMe
    incBy('')
    // $FlowFixMe
    decBy('')
    return null
  }
  const onChange = ({ count }) => {
    ;(count: number)
    // $FlowFixMe
    ;(count: string)
  }
  ;[
    <Counter render={render} />,
    <Counter>{render}</Counter>,
    <Counter onChange={onChange} render={noop} />,
    <Counter onChange={onChange}>{noop}</Counter>,
    <Counter initial={0} render={noop} />,
    // $FlowFixMe
    <Counter />,
    // $FlowFixMe
    <Counter initial={''} render={noop} />,
  ]
}

{
  const render = ({ isFocus, bindFocus }) => {
    ;(isFocus: boolean)
    ;(bindFocus.onFocusIn: Function)
    ;(bindFocus.onFocusOut: Function)
    // $FlowFixMe
    ;(isFocus: number)
    // $FlowFixMe
    ;(bindFocus.onFocusIn: number)
    // $FlowFixMe
    ;(bindFocus.onFocusOut: number)
    return null
  }
  const onChange = ({ isFocus }) => {
    ;(isFocus: boolean)
    // $FlowFixMe
    ;(isFocus: number)
  }
  ;[
    <Focus render={render} />,
    <Focus>{render}</Focus>,
    <Focus onChange={onChange} render={noop} />,
    <Focus onChange={onChange}>{noop}</Focus>,
    // $FlowFixMe
    <Focus />,
  ]
}

{
  const render = ({ input }) => {
    const name = input('a')
    ;(name.value: string)
    name.setValue('')
    ;(name.bind.value: string)
    ;(name.bind.onChange: Function)
    // $FlowFixMe
    input('b')
    // $FlowFixMe
    ;(name.value: number)
    // $FlowFixMe
    name.setValue(0)
    // $FlowFixMe
    ;(name.bind.value: number)
    // $FlowFixMe
    ;(name.bind.onChange: number)
  }
  const onChange = data => {
    ;(data.a: string)
    // $FlowFixMe
    ;(data.a: number)
  }
  ;[
    <Form initial={{ a: '' }} render={render} />,
    <Form initial={{ a: '' }}>{render}</Form>,
    <Form initial={{ a: '' }} onChange={onChange} render={noop} />,
    <Form initial={{ a: '' }} onChange={onChange}>
      {noop}
    </Form>,
    // $FlowFixMe
    <Form />,
    // $FlowFixMe
    <Form render={noop} />,
    // $FlowFixMe
    <Form>{noop}</Form>,
    // $FlowFixMe
    <Form initial={{ a: 0 }} render={noop} />,
    // $FlowFixMe
    <Form initial={{ a: 0 }}>{noop}</Form>,
  ]
}

{
  const render = ({ isHover, bindHover }) => {
    ;(isHover: boolean)
    ;(bindHover.onMouseEnter: Function)
    ;(bindHover.onMouseLeave: Function)
    // $FlowFixMe
    ;(isHover: number)
    // $FlowFixMe
    ;(bindHover.onMouseEnter: number)
    // $FlowFixMe
    ;(bindHover.onMouseLeave: number)
    return null
  }
  const onChange = ({ isHover }) => {
    ;(isHover: boolean)
    // $FlowFixMe
    ;(isHover: number)
  }
  ;[
    <Hover render={render} />,
    <Hover>{render}</Hover>,
    <Hover onChange={onChange} render={noop} />,
    <Hover onChange={onChange}>{noop}</Hover>,
    // $FlowFixMe
    <Hover />,
  ]
}

{
  const render = ({ list, first, last, setList, push, pull, sort }) => {
    ;(list: $ReadOnlyArray<number>)
    ;(first(): string | number | void)
    ;(last(): string | number | void)
    setList([])
    setList([0])
    push(0)
    pull((d: number) => true)
    sort((a: number, b: number) => -1)
    // $FlowFixMe
    ;(list: $ReadOnlyArray<string>)
    //$FlowFixMe
    setList([''])
    //$FlowFixMe
    push('')
    //$FlowFixMe
    pull((d: string) => true)
    //$FlowFixMe
    sort((a: string, b: string) => -1)
  }
  const onChange = ({ list }) => {
    ;(list: $ReadOnlyArray<number>)
    // $FlowFixMe
    ;(list: $ReadOnlyArray<string>)
  }
  ;[
    <List initial={([]: $ReadOnlyArray<number>)} render={render} />,
    <List initial={([]: $ReadOnlyArray<number>)}>{render}</List>,
    <List
      initial={([]: $ReadOnlyArray<number>)}
      onChange={onChange}
      render={noop}
    />,
    <List initial={([]: $ReadOnlyArray<number>)} onChange={onChange}>
      {noop}
    </List>,
    // $FlowFixMe
    <List />,
    // $FlowFixMe
    <List render={noop} />,
    // $FlowFixMe
    <List>{noop}</List>,
    // $FlowFixMe
    <List initial={{ a: 0 }} render={noop} />,
    // $FlowFixMe
    <List initial={{ a: 0 }}>{noop}</List>,
  ]
}

{
  const render = ({ isLoading, toggleLoading, setLoading }) => {
    ;(isLoading: boolean)
    toggleLoading()
    setLoading(true)
    // $FlowFixMe
    ;(isLoading: number)
    // $FlowFixMe
    toggleLoading(true)
    // $FlowFixMe
    setLoading(0)
    return null
  }
  const onChange = ({ isLoading }) => {
    ;(isLoading: boolean)
    // $FlowFixMe
    ;(isLoading: number)
  }
  ;[
    <Loading render={render} />,
    <Loading>{render}</Loading>,
    <Loading onChange={onChange} render={noop} />,
    <Loading onChange={onChange}>{noop}</Loading>,
    <Loading initial={true} render={noop} />,
    // $FlowFixMe
    <Loading />,
    // $FlowFixMe
    <Loading initial={''} render={noop} />,
  ]
}

{
  const render = ({ values, add, clear, remove, has }) => {
    ;(values: $ReadOnlyArray<number | string>)
    add(0)
    add('')
    remove(0)
    remove('')
    ;(has(0): boolean)
    ;(has(''): boolean)
    clear()
    // $FlowFixMe
    ;(values: $ReadOnlyArray<number>)
    // $FlowFixMe
    add(true)
    // $FlowFixMe
    remove(true)
    // $FlowFixMe
    ;(has(true): boolean)
    return null
  }
  const onChange = ({ values }) => {
    ;(values: $ReadOnlyArray<number | string>)
    // $FlowFixMe
    ;(values: $ReadOnlyArray<number>)
  }
  ;[
    <Set initial={([]: $ReadOnlyArray<number | string>)} render={render} />,
    <Set initial={([]: $ReadOnlyArray<number | string>)}>{render}</Set>,
    <Set
      initial={([]: $ReadOnlyArray<number | string>)}
      onChange={onChange}
      render={noop}
    />,
    <Set initial={([]: $ReadOnlyArray<number | string>)} onChange={onChange}>
      {noop}
    </Set>,
  ]
}

{
  const render = ({ values, set, over, get }) => {
    ;(values.a: number)
    set('a', 0)
    over('a', (d: number) => d)
    ;(get('a'): number)
    // $FlowFixMe
    ;(values.a: string)
    // TODO should fail
    set('a', '')
    // $FlowFixMe
    set('b', 0)
    // $FlowFixMe
    over('a', (d: string) => d)
    // TODO should fail
    over('a', () => '')
    // $FlowFixMe
    ;(get('a'): string)
    return null
  }
  const onChange = values => {
    ;(values.a: number)
    // $FlowFixMe
    ;(values.a: string)
  }
  ;[
    <Map initial={{ a: 0 }} render={render} />,
    <Map initial={{ a: 0 }}>{render}</Map>,
    <Map initial={{ a: 0 }} onChange={onChange} render={noop} />,
    <Map initial={{ a: 0 }} onChange={onChange}>
      {noop}
    </Map>,
  ]
}

/* State with inferred generic */
{
  const render = ({ state, setState }) => {
    ;(state.v: number)
    setState({})
    setState({ v: 1 })
    // $FlowFixMe
    ;(state.v: string)
    // $FlowFixMe
    setState({ v: '' })
    // $FlowFixMe
    setState({ t: 1 })
    // $FlowFixMe
    setState({ n: 2 })
  }
  const onChange = state => {
    ;(state.v: number)
    // $FlowFixMe
    ;(state.v: string)
  }
  ;[
    <State initial={{ v: 0, n: null }} render={render} />,
    <State initial={{ v: 0, n: null }}>{render}</State>,
    <State initial={{ v: 0, n: null }} onChange={onChange} render={noop} />,
    <State initial={{ v: 0, n: null }} onChange={onChange}>
      {noop}
    </State>,
    // $FlowFixMe
    <State />,
    // $FlowFixMe
    <State render={noop} />,
    // $FlowFixMe
    <State initial={0} render={noop} />,
  ]
}

/* State with specified generic */
{
  const render1 = ({ state, setState }) => {
    ;(state.n: ?number)
    setState({})
    setState({ n: 1 })
    // $FlowFixMe
    ;(state.n: number)
    // $FlowFixMe
    setState({ n: '' })
  }
  ;[
    <State initial={({ n: null }: { n: ?number })} render={render1} />,
    <State initial={({ n: null }: { n: ?number })}>{render1}</State>,
  ]
}

{
  const render = ({ on, toggle, set }) => {
    ;(on: boolean)
    toggle()
    set(true)
    set(v => !v)
    // $FlowFixMe
    ;(on: number)
    // $FlowFixMe
    toggle(true)
    // $FlowFixMe
    set(0)
    return null
  }
  const onChange = ({ on }) => {
    ;(on: boolean)
    // $FlowFixMe
    ;(on: number)
  }
  ;[
    <Toggle render={render} />,
    <Toggle>{render}</Toggle>,
    <Toggle onChange={onChange} render={noop} />,
    <Toggle onChange={onChange}>{noop}</Toggle>,
    <Toggle initial={true} render={noop} />,
    // $FlowFixMe
    <Toggle />,
    // $FlowFixMe
    <Toggle initial={''} render={noop} />,
  ]
}

/* Value with inferred generic */
{
  const render = ({ value, setValue }) => {
    ;(value: number | string | boolean)
    // $FlowFixMe
    ;(value: number)
    // $FlowFixMe
    ;(value: string)
    // $FlowFixMe
    ;(value: boolean)
    setValue(true)
  }
  const onChange = ({ value }) => {
    ;(value: number | string)
    // $FlowFixMe
    ;(value: number)
    // $FlowFixMe
    ;(value: string)
  }
  ;[
    <Value initial={0} render={render} />,
    <Value initial={''}>{render}</Value>,
    <Value initial={1} onChange={onChange} render={noop} />,
    <Value initial={''} onChange={onChange}>
      {noop}
    </Value>,
    // $FlowFixMe
    <Value />,
    // $FlowFixMe
    <Value render={noop} />,
  ]
}

/* Value with specified generic */
{
  const render1 = ({ value, setValue }) => {
    ;(value: number | string)
    setValue('')
    // $FlowFixMe
    ;(value: number)
  }
  ;[
    <Value initial={(0: number)} render={render1} />,
    <Value initial={(0: number)}>{render1}</Value>,
  ]
}
