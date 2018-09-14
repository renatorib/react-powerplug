// TypeScript Version: 2.4

import * as React from 'react'

/* Utils */

export type SharedProps = {
  reset(cb?: () => void): void
  resetState(): void
}

export type Updater<T> = (value: T | ((updater: T) => T)) => void
export type Callback<T> = (value: T) => void
export type RenderFn<T> = (value: T & SharedProps) => React.ReactNode

/* Active */

export type ActiveChange = (active: boolean) => void

export type ActiveRender = (
  argument: {
    active: boolean
    bind: { onMouseDown: () => void; onMouseUp: () => void }
  }
) => React.ReactNode

export const Active: React.ComponentType<
  | { onChange?: ActiveChange; render: ActiveRender }
  | { onChange?: ActiveChange; children: ActiveRender }
>

/* Compose */

export const Compose: React.ComponentType

/* Counter */

export type CounterChange = Callback<number>

export type CounterRender = RenderFn<{
  count: number
  inc: () => void
  dec: () => void
  incBy: (step: number) => void
  decBy: (step: number) => void
}>

export const Counter: React.ComponentType<
  | { initial?: number; onChange?: CounterChange; render: CounterRender }
  | { initial?: number; onChange?: CounterChange; children: CounterRender }
>

/* Focus */

export type FocusChange = Callback<boolean>

export type FocusRender = RenderFn<{
  focused: boolean
  bind: { onFocus: () => void; onBlur: () => void }
}>

export const Focus: React.ComponentType<
  | { onChange?: FocusChange; render: FocusRender }
  | { onChange?: FocusChange; children: FocusRender }
>

/* FocusManager */

export type FocusManagerChange = Callback<boolean>

export type FocusManagerRender = RenderFn<{
  focused: boolean
  blur: () => void
  bind: {
    tabIndex: number
    onFocus: () => void
    onBlur: () => void
    onMouseDown: () => void
    onMouseUp: () => void
  }
}>

export const FocusManager: React.ComponentType<
  | { onChange?: FocusManagerChange; render: FocusManagerRender }
  | { onChange?: FocusManagerChange; children: FocusManagerRender }
>

/* Form */

export type FormChange<T> = Callback<T>

export type FormRender<T, K extends keyof T> = RenderFn<{
  values: T
  setValues: (values: T | ((a: T) => T)) => void
  field: (
    key: K
  ) => {
    value: T[K]
    set: Updater<T[K]>
    bind: {
      value: T[K]
      onChange: (argument: React.ChangeEvent<T[K]> | T[K]) => void
    }
  }
}>

export type FormProps<T, K extends keyof T> =
  | { initial: T; onChange?: FormChange<T>; render: FormRender<T, K> }
  | { initial: T; onChange?: FormChange<T>; children: FormRender<T, K> }

export interface Hash {
  [key: string]: string
}

export class Form<T extends Hash, K extends keyof T> extends React.Component<
  FormProps<T, K>,
  any
> {}

/* Hover */

export type HoverChange = Callback<boolean>

export type HoverRender = RenderFn<{
  hovered: boolean
  bind: { onMouseEnter: () => void; onMouseLeave: () => void }
}>

export const Hover: React.ComponentType<
  | { onChange?: HoverChange; render: HoverRender }
  | { onChange?: HoverChange; children: HoverRender }
>

/* Field */

export type FieldChange<T> = Callback<T>

export type FieldRender<T> = RenderFn<{
  value: T
  set: Updater<T>
  bind: { value: T; onChange: (event: React.ChangeEvent<any>) => void }
}>

export type FieldProps<T> =
  | { initial?: T; onChange?: FieldChange<T>; render: FieldRender<T> }
  | { initial?: T; onChange?: FieldChange<T>; children: FieldRender<T> }

export class Field<T> extends React.Component<FieldProps<T>> {}

/* List */

export type ListChange<T> = Callback<ReadonlyArray<T>>

export type ListRender<T> = RenderFn<{
  list: ReadonlyArray<T>
  first: () => T | void
  last: () => T | void
  set: Updater<ReadonlyArray<T>>
  push: (value: T) => void
  pull: (predicate: (flag: T) => boolean) => void
  sort: (compare: (a: T, b: T) => -1 | 0 | 1) => void
}>

export type ListProps<T> =
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

export type SetChange<T> = Callback<ReadonlyArray<T>>

export type SetRender<T> = RenderFn<{
  values: ReadonlyArray<T>
  add: (key: T) => void
  clear: () => void
  remove: (key: T) => void
  has: (key: T) => boolean
}>

export type SetProps<T> =
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

export type MapValues<T> = { [key: string]: T }
export type MapChange<T> = Callback<T>

export type MapRender<T, K = string> = RenderFn<{
  values: MapValues<T>
  set: (key: K, fn: T | ((value: T) => T)) => void
  get: (key: K) => T
  has: (key: K) => boolean
  delete: (key: K) => void
  clear: () => void
}>

export type MapProps<T, K extends keyof T> =
  | { initial: T; onChange?: MapChange<T>; render: MapRender<T, K> }
  | { initial: T; onChange?: MapChange<T>; children: MapRender<T, K> }

export class Map<T extends {}, K extends keyof T> extends React.Component<
  MapProps<T, K>,
  any
> {}

/* State */

export type StateChange<T> = Callback<T>

export type StateRender<T> = RenderFn<{
  state: T
  setState: (
    updated: Partial<T> | ((state: T) => Partial<T>),
    cb?: () => void
  ) => void
}>

export type StateProps<T> =
  | { initial: T; onChange?: StateChange<T>; render: StateRender<T> }
  | { initial: T; onChange?: StateChange<T>; children: StateRender<T> }

export class State<T extends {}> extends React.Component<StateProps<T>> {}

/* Toggle */

export type ToggleChange = Callback<boolean>

export type ToggleRender = RenderFn<{
  on: boolean
  toggle: () => void
  set: Updater<boolean>
}>

export const Toggle: React.ComponentType<
  | { initial?: boolean; onChange?: ToggleChange; render: ToggleRender }
  | { initial?: boolean; onChange?: ToggleChange; children: ToggleRender }
>

/* Touch */

export type TouchChange = Callback<boolean>

export type TouchRender = RenderFn<{
  touched: boolean
  bind: { onTouchStart: () => void; onTouchEnd: () => void }
}>

export const Touch: React.ComponentType<
  | { onChange?: TouchChange; render: TouchRender }
  | { onChange?: TouchChange; children: TouchRender }
>

/* Value */

export type ValueChange<T> = Callback<T>

export type ValueRender<T> = RenderFn<{
  value: T
  set: Updater<T>
}>

export type ValueProps<T> =
  | { initial: T; onChange?: ValueChange<T>; render: ValueRender<T> }
  | { initial: T; onChange?: ValueChange<T>; children: ValueRender<T> }

export class Value<T> extends React.Component<ValueProps<T>> {}

/* composeEvents */

export interface Events {
  [name: string]: (event: any) => void
}

export function composeEvents(...arguments: Events[]): Events
