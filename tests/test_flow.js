// @flow

import * as React from "react";
import {
  Active,
  Bind,
  Counter,
  Focus,
  Hover,
  Index,
  Loading,
  Toggle
} from "../src";

const noop = () => null;

{
  const render = ({ isActive, bindActive }) => {
    (isActive: boolean);
    (bindActive.onMouseDown: Function);
    (bindActive.onMouseUp: Function);
    // $FlowFixMe
    (isActive: number);
    // $FlowFixMe
    (bindActive.onMouseDown: number);
    // $FlowFixMe
    (bindActive.onMouseUp: number);
    return null;
  };
  const onChange = ({ isActive }) => {
    (isActive: boolean);
    // $FlowFixMe
    (isActive: number);
  };
  [
    <Active render={render} />,
    <Active>{render}</Active>,
    <Active onChange={onChange} render={noop} />,
    <Active onChange={onChange}>{noop}</Active>,
    // $FlowFixMe
    <Active />
  ];
}

{
  const render = ({ value, setValue, bind }) => {
    (value: string);
    setValue("");
    (bind.value: string);
    (bind.onChange: Function);
    // $FlowFixMe
    (value: number);
    // $FlowFixMe
    setValue(0);
    // $FlowFixMe
    (bind.value: number);
    // $FlowFixMe
    (bind.onChange: number);
    return null;
  };
  const onChange = ({ value }) => {
    (value: string);
    // $FlowFixMe
    (value: number);
  };
  [
    <Bind render={render} />,
    <Bind>{render}</Bind>,
    <Bind onChange={onChange} render={noop} />,
    <Bind onChange={onChange}>{noop}</Bind>,
    <Bind initial={""} render={noop} />,
    // $FlowFixMe
    <Bind />,
    // $FlowFixMe
    <Bind initial={0} render={noop} />
  ];
}

{
  const render = ({ count, inc, dec }) => {
    (count: number);
    inc();
    inc(0);
    dec();
    dec(0);
    // $FlowFixMe
    (count: string);
    // $FlowFixMe
    inc("");
    // $FlowFixMe
    dec("");
    return null;
  };
  const onChange = ({ count }) => {
    (count: number);
    // $FlowFixMe
    (count: string);
  };
  [
    <Counter render={render} />,
    <Counter>{render}</Counter>,
    <Counter onChange={onChange} render={noop} />,
    <Counter onChange={onChange}>{noop}</Counter>,
    <Counter initial={0} render={noop} />,
    // $FlowFixMe
    <Counter />,
    // $FlowFixMe
    <Counter initial={""} render={noop} />
  ];
}

{
  const render = ({ isFocus, bindFocus }) => {
    (isFocus: boolean);
    (bindFocus.onFocusIn: Function);
    (bindFocus.onFocusOut: Function);
    // $FlowFixMe
    (isFocus: number);
    // $FlowFixMe
    (bindFocus.onFocusIn: number);
    // $FlowFixMe
    (bindFocus.onFocusOut: number);
    return null;
  };
  const onChange = ({ isFocus }) => {
    (isFocus: boolean);
    // $FlowFixMe
    (isFocus: number);
  };
  [
    <Focus render={render} />,
    <Focus>{render}</Focus>,
    <Focus onChange={onChange} render={noop} />,
    <Focus onChange={onChange}>{noop}</Focus>,
    // $FlowFixMe
    <Focus />
  ];
}

{
  const render = ({ isHover, bindHover }) => {
    (isHover: boolean);
    (bindHover.onMouseEnter: Function);
    (bindHover.onMouseLeave: Function);
    // $FlowFixMe
    (isHover: number);
    // $FlowFixMe
    (bindHover.onMouseEnter: number);
    // $FlowFixMe
    (bindHover.onMouseLeave: number);
    return null;
  };
  const onChange = ({ isHover }) => {
    (isHover: boolean);
    // $FlowFixMe
    (isHover: number);
  };
  [
    <Hover render={render} />,
    <Hover>{render}</Hover>,
    <Hover onChange={onChange} render={noop} />,
    <Hover onChange={onChange}>{noop}</Hover>,
    // $FlowFixMe
    <Hover />
  ];
}

{
  const render = ({ index, setIndex }) => {
    (index: number);
    setIndex(0);
    // $FlowFixMe
    (index: string);
    // $FlowFixMe
    setIndex("");
    // $FlowFixMe
    setIndex();
    return null;
  };
  const onChange = ({ index }) => {
    (index: number);
    // $FlowFixMe
    (index: string);
  };
  [
    <Index render={render} />,
    <Index>{render}</Index>,
    <Index onChange={onChange} render={noop} />,
    <Index onChange={onChange}>{noop}</Index>,
    <Index initial={0} render={noop} />,
    // $FlowFixMe
    <Index />,
    // $FlowFixMe
    <Index initial={""} render={noop} />
  ];
}

{
  const render = ({ isLoading, toggleLoading, setLoading }) => {
    (isLoading: boolean);
    toggleLoading();
    setLoading(true);
    // $FlowFixMe
    (isLoading: number);
    // $FlowFixMe
    toggleLoading(true);
    // $FlowFixMe
    setLoading(0);
    return null;
  };
  const onChange = ({ isLoading }) => {
    (isLoading: boolean);
    // $FlowFixMe
    (isLoading: number);
  };
  [
    <Loading render={render} />,
    <Loading>{render}</Loading>,
    <Loading onChange={onChange} render={noop} />,
    <Loading onChange={onChange}>{noop}</Loading>,
    <Loading initial={true} render={noop} />,
    // $FlowFixMe
    <Loading />,
    // $FlowFixMe
    <Loading initial={""} render={noop} />
  ];
}

{
  const render = ({ on, off, toggle, setOn }) => {
    (on: boolean);
    (off: boolean);
    toggle();
    setOn(true);
    // $FlowFixMe
    (on: number);
    // $FlowFixMe
    (off: number);
    // $FlowFixMe
    toggle(true);
    // $FlowFixMe
    setOn(0);
    return null;
  };
  const onChange = ({ on }) => {
    (on: boolean);
    // $FlowFixMe
    (on: number);
  };
  [
    <Toggle render={render} />,
    <Toggle>{render}</Toggle>,
    <Toggle onChange={onChange} render={noop} />,
    <Toggle onChange={onChange}>{noop}</Toggle>,
    <Toggle initial={true} render={noop} />,
    // $FlowFixMe
    <Toggle />,
    // $FlowFixMe
    <Toggle initial={""} render={noop} />
  ];
}
