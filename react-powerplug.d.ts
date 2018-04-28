declare module 'react-powerplug' {
  import * as React from 'react'

  /* Utils */

  type Updater<T> = (value: T | ((updater: T) => T)) => void
  type Callback<T> = (value: T) => void
  type RenderFn<T> = (value: T) => React.ReactNode

  /* Active */

  type ActiveChange = (argument: { isActive: boolean }) => void //exact

  type ActiveRender = (
    argument: {
      isActive: boolean
      bind: { onMouseDown: () => void; onMouseUp: () => void }
    }
  ) => React.ReactNode

  export var Active: React.ComponentType<
    | { onChange?: ActiveChange; render: ActiveRender }
    | { onChange?: ActiveChange; children: ActiveRender }
  >

  /* Compose */

  export var Compose: React.ComponentType<Object>

  /* Counter */

  type CounterChange = Callback<{ count: number }>

  type CounterRender = RenderFn<{
    count: number
    inc: () => void
    dec: () => void
    incBy: (step: number) => void
    decBy: (step: number) => void
  }>

  export var Counter: React.ComponentType<
    | { initial?: number; onChange?: CounterChange; render: CounterRender }
    | { initial?: number; onChange?: CounterChange; children: CounterRender }
  >

  /* Focus */

  type FocusChange = Callback<{ isFocused: boolean }>

  type FocusRender = RenderFn<{
    isFocused: boolean
    bind: { onFocus: () => void; onBlur: () => void }
  }>

  export var Focus: React.ComponentType<
    | { onChange?: FocusChange; render: FocusRender }
    | { onChange?: FocusChange; children: FocusRender }
  >

  /* FocusManager */

  type FocusManagerChange = Callback<{ isFocused: boolean }>

  type FocusManagerRender = RenderFn<{
    isFocused: boolean
    blur: () => void
    bind: { tabIndex: number; onFocus: () => void; onBlur: () => void }
  }>

  export var FocusManager: React.ComponentType<
    | { onChange?: FocusManagerChange; render: FocusManagerRender }
    | { onChange?: FocusManagerChange; children: FocusManagerRender }
  >

  /* Form */

  type FormChange<T> = Callback<T>

  type FormRender<T, K extends keyof T> = RenderFn<{
    values: T
    input: (
      key: K
    ) => {
      value: string
      set: Updater<string>
      bind: {
        value: string
        onChange: (argument: React.ChangeEvent<any>) => void
      }
    }
  }>

  type FormProps<T> =
    | { initial: T; onChange?: FormChange<T>; render: FormRender<T> }
    | { initial: T; onChange?: FormChange<T>; children: FormRender<T> }

  interface Hash {
    [key: string]: string
  }

  export class Form<T extends Hash> extends React.Component<
    FormProps<T>,
    any
  > {}

  /* Hover */

  type HoverChange = Callback<{ isHovered: boolean }>

  type HoverRender = RenderFn<{
    isHovered: boolean
    bind: { onMouseEnter: () => void; onMouseLeave: () => void }
  }>

  export var Hover: React.ComponentType<
    | { onChange?: HoverChange; render: HoverRender }
    | { onChange?: HoverChange; children: HoverRender }
  >

  /* Input */

  type InputChange = Callback<{ value: string }>

  type InputRender = RenderFn<{
    value: string
    set: Updater<string>
    bind: { value: string; onChange: (event: React.ChangeEvent<any>) => void }
  }>

  export var Input: React.ComponentType<
    | { initial?: string; onChange?: InputChange; render: InputRender }
    | { initial?: string; onChange?: InputChange; children: InputRender }
  >

  /* List */

  type ListChange<T> = Callback<{ list: ReadonlyArray<T> }>

  type ListRender<T> = RenderFn<{
    list: ReadonlyArray<T>
    first: () => T | void
    last: () => T | void
    set: Updater<ReadonlyArray<T>>
    push: (value: T) => void
    pull: (predicate: (T) => boolean) => void
    sort: (compare: (a: T, b: T) => -1 | 0 | 1) => void
  }>

  type ListProps<T> =
    | {
        initial: ReadonlyArray<T>
        onChange?: ListChange<T>
        render: ListRender<T>
      }
    | {
        initial: ReadonlyArray<T>
        onChange?: ListChange<T>
        children: ListRender<T>
      }

  export class List<T> extends React.Component<ListProps<T>, any> {}

  /* Set */

  type SetChange<T> = Callback<{ values: ReadonlyArray<T> }>

  type SetRender<T> = RenderFn<{
    values: ReadonlyArray<T>
    add: (key: T) => void
    clear: () => void
    remove: (key: T) => void
    has: (key: T) => boolean
  }>

  type SetProps<T> =
    | {
        initial: ReadonlyArray<T>
        onChange?: SetChange<T>
        render: SetRender<T>
      }
    | {
        initial: ReadonlyArray<T>
        onChange?: SetChange<T>
        children: SetRender<T>
      }

  export class Set<T> extends React.Component<SetProps<T>> {}

  /* Map */

  type MapChange<T> = Callback<T>

  type MapRender<T, K extends keyof T> = RenderFn<{
    values: T
    set: (key: K, value: T[K]) => void
    over: (key: K, fn: (value: T[K]) => T[K]) => void
    get: (key: K) => T[K]
  }>

  type MapProps<T> =
    | { initial: T; onChange?: MapChange<T>; render: MapRender<T> }
    | { initial: T; onChange?: MapChange<T>; children: MapRender<T> }

  export class Map<T extends Object> extends React.Component<
    MapProps<T>,
    any
  > {}

  /* State */

  type StateChange<T> = Callback<T>

  type StateRender<T> = RenderFn<{
    state: T
    setState: (
      updated: Partial<T> | ((state: T) => Partial<T>),
      cb?: () => void
    ) => void
  }>

  type StateProps<T> =
    | { initial: T; onChange?: StateChange<T>; render: StateRender<T> }
    | { initial: T; onChange?: StateChange<T>; children: StateRender<T> }

  export class State<T extends Object> extends React.Component<StateProps<T>> {}

  /* Toggle */

  type ToggleChange = Callback<{ on: boolean }>

  type ToggleRender = RenderFn<{
    on: boolean
    toggle: () => void
    set: Updater<boolean>
  }>

  export var Toggle: React.ComponentType<
    | { initial?: boolean; onChange?: ToggleChange; render: ToggleRender }
    | { initial?: boolean; onChange?: ToggleChange; children: ToggleRender }
  >

  /* Touch */

  type TouchChange = Callback<{ isTouched: boolean }>

  type TouchRender = RenderFn<{
    isTouched: boolean
    bind: { onTouchStart: () => void; onTouchEnd: () => void }
  }>

  export var Touch: React.ComponentType<
    | { onChange?: TouchChange; render: TouchRender }
    | { onChange?: TouchChange; children: TouchRender }
  >

  /* Value */

  type ValueChange<T> = Callback<{ value: T }>

  type ValueRender<T> = RenderFn<{
    value: T
    set: Updater<T>
  }>

  type ValueProps<T> =
    | { initial: T; onChange?: ValueChange<T>; render: ValueRender<T> }
    | { initial: T; onChange?: ValueChange<T>; children: ValueRender<T> }

  export class Value<T> extends React.Component<ValueProps<T>> {}

  /* composeEvents */

  type Events = { [name: string]: Function }

  export function composeEvents(...arguments: Events[]): Events
}
