// @flow

import * as React from 'react';
import { Active } from '../src';

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
    <Active onChange={onChange} children={noop} />,
    // $FlowFixMe
    <Active />,
  ];
}

