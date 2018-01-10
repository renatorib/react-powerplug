// @flow

import * as React from "react";
import { Active, Bind } from "../src";

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
    <Bind initial={''} render={noop} />,
    // $FlowFixMe
    <Bind />,
    // $FlowFixMe
    <Bind initial={0} render={noop} />,
  ];
}
