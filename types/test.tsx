/* tslint-disable */
// TypeScript Version: 2.7

import * as React from 'react'
import {
  Active,
  Input,
  Counter,
  Focus,
  FocusManager,
  Form,
  Hover,
  List,
  Map,
  Set,
  State,
  Toggle,
  Touch,
  Value,
  ListRender,
  SetRender,
  MapRender,
  StateRender,
  ToggleRender,
  TouchRender,
  ValueRender,
  ActiveRender,
  InputRender,
  CounterRender,
  FocusRender,
  FocusManagerRender,
  FormRender,
  HoverRender,
} from './index'

const noop = () => null

/* Active */
{
  const render: ActiveRender = ({ active, bind }) => {
    return null
  }
  const onChange = (active: boolean) => {}
  ;[
    <Active render={render} />,
    <Active>{render}</Active>,
    <Active onChange={onChange} render={noop} />,
    <Active onChange={onChange}>{noop}</Active>,
    // $ExpectError
    <Active />,
  ]
}

/* Input */
{
  const render: InputRender = ({ value, set, bind }) => {
    return null
  }
  const onChange = (value: string) => {}
  ;[
    <Input render={render} />,
    <Input>{render}</Input>,
    <Input onChange={onChange} render={noop} />,
    <Input onChange={onChange}>{noop}</Input>,
    <Input initial={''} render={noop} />,
    // $ExpectError
    <Input />,
    // $ExpectError
    <Input initial={0} render={noop} />,
  ]
}

/* Counter */
{
  const render: CounterRender = ({ count, inc, dec, incBy, decBy }) => {
    return null
  }
  const onChange = (count: number) => {}
  ;[
    <Counter render={render} />,
    <Counter>{render}</Counter>,
    <Counter onChange={onChange} render={noop} />,
    <Counter onChange={onChange}>{noop}</Counter>,
    <Counter initial={0} render={noop} />,
    // $ExpectError
    <Counter />,
    // $ExpectError
    <Counter initial={''} render={noop} />,
  ]
}

/* Focus */
{
  const render: FocusRender = ({ focused, bind }) => {
    return null
  }
  const onChange = (focused: boolean) => {}
  ;[
    <Focus render={render} />,
    <Focus>{render}</Focus>,
    <Focus onChange={onChange} render={noop} />,
    <Focus onChange={onChange}>{noop}</Focus>,
    // $ExpectError
    <Focus />,
  ]
}

/* FocusManager */
{
  const render: FocusManagerRender = ({ focused, blur, bind }) => {
    return null
  }
  const onChange = (focused: boolean) => {}
  ;[
    <FocusManager render={render} />,
    <FocusManager>{render}</FocusManager>,
    <FocusManager onChange={onChange} render={noop} />,
    <FocusManager onChange={onChange}>{noop}</FocusManager>,
    // $ExpectError
    <FocusManager />,
  ]
}

/* Form */
{
  const render: FormRender<{ a: string }, 'a'> = ({ input }) => <div />
  const onChange = (data: {}) => {}
  ;[
    <Form initial={{ a: '' }} render={render} />,
    <Form initial={{ a: '' }}>{render}</Form>,
    <Form initial={{ a: '' }} onChange={onChange} render={noop} />,
    <Form initial={{ a: '' }} onChange={onChange}>
      {noop}
    </Form>,
    // $ExpectError
    <Form />,
    // $ExpectError
    <Form render={noop} />,
    // $ExpectError
    <Form>{noop}</Form>,
    // $ExpectError
    <Form initial={{ b: 0 }} render={render} />,
    // $ExpectError
    <Form initial={{ b: 0 }}>{render}</Form>,
  ]
}

/* Hover */
{
  const render: HoverRender = ({ hovered, bind }) => {
    return null
  }
  const onChange = (hovered: boolean) => {}
  ;[
    <Hover render={render} />,
    <Hover>{render}</Hover>,
    <Hover onChange={onChange} render={noop} />,
    <Hover onChange={onChange}>{noop}</Hover>,
    // $ExpectError
    <Hover />,
  ]
}

/* List */
{
  const render: ListRender<number> = ({
    list,
    first,
    last,
    set,
    push,
    pull,
    sort,
  }) => <div />

  const onChange = (list: number[]) => {}
  ;[
    <List initial={[1, 2, 3]} render={render} />,
    <List initial={[]}>{render}</List>,
    <List initial={[]} onChange={onChange} render={noop} />,
    <List initial={[1, 2, 3]} onChange={onChange}>
      {noop}
    </List>,
    // $ExpectError
    <List />,
    // $ExpectError
    <List render={noop} />,
    // $ExpectError
    <List>{noop}</List>,
    // $ExpectError
    <List initial={{ a: 0 }} render={noop} />,
    // $ExpectError
    <List initial={{ a: 0 }}>{noop}</List>,
  ]
}

/* Set */
{
  const render: SetRender<number> = ({ values, add, clear, remove, has }) => {
    return null
  }
  const onChange = (values: number[]) => {}
  ;[
    <Set initial={[1, 2, 3]} render={render} />,
    <Set initial={[1, 2, 3]}>{render}</Set>,
    <Set initial={[1, 2, 3]} onChange={onChange} render={noop} />,
    <Set initial={[1, 2, 3]} onChange={onChange}>
      {noop}
    </Set>,
  ]
}

/* Map */
{
  const render: MapRender<{ a: number }, 'a'> = ({
    values,
    set,
    over,
    get,
  }) => {
    return null
  }
  const onChange = (values: { a: number }) => {}
  ;[
    <Map initial={{ a: 0 }} render={render} />,
    <Map initial={{ a: 0 }}>{render}</Map>,
    <Map initial={{ a: 0 }} onChange={onChange} render={noop} />,
    <Map initial={{ a: 0 }} onChange={onChange}>
      {noop}
    </Map>,
    // $ExpectError
    <Map initial={{ b: 0 }} onChange={onChange} render={render} />,
  ]
}

/* State with inferred generic */
{
  const render: StateRender<{ v: number; n?: null }> = ({
    state,
    setState,
  }) => <div />
  const onChange = (state: { v: number; n?: null }) => {}
  ;[
    <State initial={{ v: 0, n: null }} render={render} />,
    <State initial={{ v: 0, n: null }}>{render}</State>,
    <State initial={{ v: 0, n: null }} onChange={onChange} render={noop} />,
    <State initial={{ v: 0, n: null }} onChange={onChange}>
      {noop}
    </State>,
    <State initial={0} render={noop} />,
    // $ExpectError
    <State />,
    // $ExpectError
    <State render={noop} />,
  ]
}

/* Toggle */
{
  const render: ToggleRender = ({ on, toggle, set }) => {
    return null
  }
  const onChange = (on: boolean) => {}
  ;[
    <Toggle render={render} />,
    <Toggle>{render}</Toggle>,
    <Toggle onChange={onChange} render={noop} />,
    <Toggle onChange={onChange}>{noop}</Toggle>,
    <Toggle initial={true} render={noop} />,
    // $ExpectError
    <Toggle />,
    // $ExpectError
    <Toggle initial={''} render={noop} />,
  ]
}

/* Touch */
{
  const render: TouchRender = ({ touched, bind }) => {
    return null
  }
  const onChange = (touched: boolean) => {}
  ;[
    <Touch render={render} />,
    <Touch>{render}</Touch>,
    <Touch onChange={onChange} render={noop} />,
    <Touch onChange={onChange}>{noop}</Touch>,
    // $ExpectError
    <Touch />,
  ]
}

/* Value with inferred generic */
{
  const renderN: ValueRender<number> = ({ value, set }) => <div />
  const renderS: ValueRender<string> = ({ value, set }) => <div />
  const onChangeN = (value: number) => {}
  const onChangeS = (value: string) => {}
  ;[
    <Value initial={0} render={renderN} />,
    <Value initial={''}>{renderS}</Value>,
    <Value initial={1} onChange={onChangeN} render={noop} />,
    <Value initial={''} onChange={onChangeS}>
      {noop}
    </Value>,
    <Value initial={1}>
      {({ set }) => <div>+{set(42) && set(x => x + 1) && '1'}</div>}
    </Value>,
    // $ExpectError
    <Value initial={1}>
      {({ set }) => <div>+{set('42') && set(x => x + 1) && '1'}</div>}
    </Value>,
    // $ExpectError
    <Value initial={1}>
      {({ set }) => <div>+{set(42) && set(x => x + '1') && '1'}</div>}
    </Value>,
    // $ExpectError
    <Value />,
    // $ExpectError
    <Value render={noop} />,
    // $ExpectError
    <Value initial={0} render={renderS} />,
    // $ExpectError
    <Value initial={''}>{renderN}</Value>,
  ]
}
