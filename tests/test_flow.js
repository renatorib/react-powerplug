/* eslint-disable */
// @flow

import * as React from 'react'
import {
  Active,
  Counter,
  Focus,
  FocusManager,
  Form,
  Hover,
  Input,
  Interval,
  List,
  Map,
  Set,
  State,
  Toggle,
  Touch,
  Value,
} from '../src'

const noop = () => null

/* Active */
{
  const render = ({ active, bind }) => {
    ;(active: boolean)
    ;(bind.onMouseDown: Function)
    ;(bind.onMouseUp: Function)
    // $FlowFixMe
    ;(active: number)
    // $FlowFixMe
    ;(bind.onMouseDown: number)
    // $FlowFixMe
    ;(bind.onMouseUp: number)
    return null
  }
  const onChange = active => {
    ;(active: boolean)
    // $FlowFixMe
    ;(active: number)
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

/* Input */
{
  const render = ({ value, set, bind }) => {
    ;(value: string)
    set('')
    ;(bind.value: string)
    ;(bind.onChange: Function)
    // $FlowFixMe
    ;(value: number)
    // $FlowFixMe
    set(0)
    // $FlowFixMe
    ;(bind.value: number)
    // $FlowFixMe
    ;(bind.onChange: number)
    return null
  }
  const onChange = value => {
    ;(value: string)
    // $FlowFixMe
    ;(value: number)
  }
  ;[
    <Input render={render} />,
    <Input>{render}</Input>,
    <Input onChange={onChange} render={noop} />,
    <Input onChange={onChange}>{noop}</Input>,
    <Input initial={''} render={noop} />,
    // $FlowFixMe
    <Input />,
    // $FlowFixMe
    <Input initial={0} render={noop} />,
  ]
}

{
  const render = ({ start, stop, toggle }) => {
    start()
    start(500)
    stop()
    toggle()
    // $FlowFixMe
    start('')
    // $FlowFixMe
    stop(500)
    // $FlowFixMe
    toggle(500)
    return null
  }
  ;[
    <Interval render={render} />,
    <Interval>{render}</Interval>,
    <Interval render={noop} />,
    <Interval>{noop}</Interval>,
    <Interval delay={0} render={noop} />,
    // $FlowFixMe
    <Interval />,
    // $FlowFixMe
    <Interval delay={''} render={noop} />,
  ]
}

/* Counter */
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
  const onChange = count => {
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

/* Focus */
{
  const render = ({ focused, bind }) => {
    ;(focused: boolean)
    ;(bind.onFocus: Function)
    ;(bind.onBlur: Function)
    // $FlowFixMe
    ;(focused: number)
    // $FlowFixMe
    ;(bind.onFocus: number)
    // $FlowFixMe
    ;(bind.onBlur: number)
    return null
  }
  const onChange = focused => {
    ;(focused: boolean)
    // $FlowFixMe
    ;(focused: number)
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

/* FocusManager */
{
  const render = ({ focused, blur, bind }) => {
    ;(focused: boolean)
    ;(blur: Function)
    ;(bind.onFocus: Function)
    ;(bind.onBlur: Function)
    ;(bind.onMouseDown: Function)
    ;(bind.onMouseUp: Function)
    // $FlowFixMe
    ;(focused: number)
    // $FlowFixMe
    ;(bind.onFocus: number)
    // $FlowFixMe
    ;(bind.onBlur: number)
    // $FlowFixMe
    ;(bind.onMouseDown: number)
    // $FlowFixMe
    ;(bind.onMouseUp: number)
    return null
  }
  const onChange = focused => {
    ;(focused: boolean)
    // $FlowFixMe
    ;(focused: number)
  }
  ;[
    <FocusManager render={render} />,
    <FocusManager>{render}</FocusManager>,
    <FocusManager onChange={onChange} render={noop} />,
    <FocusManager onChange={onChange}>{noop}</FocusManager>,
    // $FlowFixMe
    <FocusManager />,
  ]
}

/* Form */
{
  const render = ({ input }) => {
    const name = input('a')
    ;(name.value: string)
    name.set('')
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

/* Hover */
{
  const render = ({ hovered, bind }) => {
    ;(hovered: boolean)
    ;(bind.onMouseEnter: Function)
    ;(bind.onMouseLeave: Function)
    // $FlowFixMe
    ;(hovered: number)
    // $FlowFixMe
    ;(bind.onMouseEnter: number)
    // $FlowFixMe
    ;(bind.onMouseLeave: number)
    return null
  }
  const onChange = hovered => {
    ;(hovered: boolean)
    // $FlowFixMe
    ;(hovered: number)
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

/* List */
{
  const render = ({ list, first, last, set, push, pull, sort }) => {
    ;(list: $ReadOnlyArray<number>)
    ;(first(): string | number | void)
    ;(last(): string | number | void)
    set([])
    set([0])
    push(0)
    push(0, 1, 2)
    pull((d: number) => true)
    sort((a: number, b: number) => -1)
    // $FlowFixMe
    ;(list: $ReadOnlyArray<string>)
    //$FlowFixMe
    set([''])
    //$FlowFixMe
    push('')
    //$FlowFixMe
    pull((d: string) => true)
    //$FlowFixMe
    sort((a: string, b: string) => -1)
  }
  const onChange = list => {
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

/* Set */
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
  const onChange = values => {
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

/* Map */
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
    setState({}, () => {})
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

/* Toggle */
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
  const onChange = on => {
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

/* Touch */
{
  const render = ({ touched, bind }) => {
    ;(touched: boolean)
    ;(bind.onTouchStart: Function)
    ;(bind.onTouchEnd: Function)
    // $FlowFixMe
    ;(touched: number)
    // $FlowFixMe
    ;(bind.onTouchStart: number)
    // $FlowFixMe
    ;(bind.onTouchEnd: number)
    return null
  }
  const onChange = touched => {
    ;(touched: boolean)
    // $FlowFixMe
    ;(touched: number)
  }
  ;[
    <Touch render={render} />,
    <Touch>{render}</Touch>,
    <Touch onChange={onChange} render={noop} />,
    <Touch onChange={onChange}>{noop}</Touch>,
    // $FlowFixMe
    <Touch />,
  ]
}

/* Value with inferred generic */
{
  const render = ({ value, set }) => {
    ;(value: number | string | boolean)
    // $FlowFixMe
    ;(value: number)
    // $FlowFixMe
    ;(value: string)
    // $FlowFixMe
    ;(value: boolean)
    set(true)
  }
  const onChange = value => {
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
  const render1 = ({ value, set }) => {
    ;(value: number | string)
    set('')
    // $FlowFixMe
    ;(value: number)
  }
  ;[
    <Value initial={(0: number)} render={render1} />,
    <Value initial={(0: number)}>{render1}</Value>,
  ]
}
