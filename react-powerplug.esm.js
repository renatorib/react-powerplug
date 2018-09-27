import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose';
import { Component, createElement, cloneElement } from 'react';
import _objectWithoutPropertiesLoose from '@babel/runtime/helpers/esm/objectWithoutPropertiesLoose';
import _extends from '@babel/runtime/helpers/esm/extends';

/* eslint-disable no-console */
var warn = function warn(condition, message, trace) {
  if (trace === void 0) {
    trace = true;
  }

  if (condition) {
    console.warn("[react-powerplug]: " + message);
    console.trace && trace && console.trace('Trace');
  }
};

var isFn = function isFn(prop) {
  return typeof prop === 'function';
};
/**
 * renderProps
 * is a render/children props interop.
 * will pick up the prop that was used,
 * or children if both are used
 */


var renderProps = function renderProps(_ref) {
  var children = _ref.children,
      render = _ref.render;

  if (process.env.NODE_ENV !== 'production') {
    warn(isFn(children) && isFn(render), 'You are using the children and render props together.\n' + 'This is impossible, therefore, only the children will be used.');
  }

  var fn = isFn(children) ? children : render;

  for (var _len = arguments.length, props = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    props[_key - 1] = arguments[_key];
  }

  return fn ? fn.apply(void 0, props) : null;
};

var noop = function noop() {};

var Value =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Value, _Component);

  function Value() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      value: _this.props.initial
    };

    _this._set = function (updater, cb) {
      if (cb === void 0) {
        cb = noop;
      }

      var _this$props$onChange = _this.props.onChange,
          onChange = _this$props$onChange === void 0 ? noop : _this$props$onChange;

      _this.setState(typeof updater === 'function' ? function (state) {
        return {
          value: updater(state.value)
        };
      } : {
        value: updater
      }, function () {
        onChange(_this.state.value);
        cb();
      });
    };

    _this._reset = function (cb) {
      if (cb === void 0) {
        cb = noop;
      }

      _this._set(_this.props.initial, cb);
    };

    return _this;
  }

  var _proto = Value.prototype;

  _proto.render = function render() {
    return renderProps(this.props, {
      value: this.state.value,
      set: this._set,
      reset: this._reset
    });
  };

  return Value;
}(Component);

var Active = function Active(_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange"]);

  return createElement(Value, {
    initial: false,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        set = _ref2.set;
    return renderProps(props, {
      active: value,
      bind: {
        onMouseDown: function onMouseDown() {
          return set(true);
        },
        onMouseUp: function onMouseUp() {
          return set(false);
        }
      }
    });
  });
};

var isElement = function isElement(element) {
  return typeof element.type === 'function';
};

var compose = function compose() {
  for (var _len = arguments.length, elements = new Array(_len), _key = 0; _key < _len; _key++) {
    elements[_key] = arguments[_key];
  }

  var reversedElements = elements.reverse();
  return function (composedProps) {
    // Stack children arguments recursively and pass
    // it down until the last component that render children
    // with these stacked arguments
    function stackProps(i, elements, propsList) {
      if (propsList === void 0) {
        propsList = [];
      }

      var element = elements[i];
      var isTheLast = i === 0; // Check if is latest component.
      // If is latest then render children,
      // Otherwise continue stacking arguments

      var renderFn = function renderFn(props) {
        return isTheLast ? renderProps.apply(void 0, [composedProps].concat(propsList.concat(props))) : stackProps(i - 1, elements, propsList.concat(props));
      }; // Clone a element if it's passed created as <Element initial={} />
      // Or create it if passed as just Element


      var elementFn = isElement(element) ? cloneElement : createElement;
      return elementFn(element, {}, renderFn);
    }

    return stackProps(elements.length - 1, reversedElements);
  };
};

var Compose = function Compose(_ref) {
  var components = _ref.components,
      props = _objectWithoutPropertiesLoose(_ref, ["components"]);

  return compose.apply(void 0, components)(props);
};

var add = function add(diff) {
  return function (value) {
    return value + diff;
  };
};

var Counter = function Counter(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? 0 : _ref$initial,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["initial", "onChange"]);

  return createElement(Value, {
    initial: initial,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        _set = _ref2.set,
        reset = _ref2.reset;
    return renderProps(props, {
      count: value,
      inc: function inc() {
        return _set(add(1));
      },
      dec: function dec() {
        return _set(add(-1));
      },
      incBy: function incBy(value) {
        return _set(add(value));
      },
      decBy: function decBy(value) {
        return _set(add(-value));
      },
      set: function set(value) {
        return _set(value);
      },
      reset: reset
    });
  });
};

var isObject = function isObject(value) {
  return typeof value === 'object' && value;
};

var Input = function Input(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? '' : _ref$initial,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["initial", "onChange"]);

  return createElement(Value, {
    initial: initial,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        set = _ref2.set,
        reset = _ref2.reset;

    var setValue = function setValue(updater) {
      return typeof updater === 'function' ? set(function (prev) {
        return updater(prev);
      }) : set(updater);
    };

    return renderProps(props, {
      value: value,
      reset: reset,
      set: setValue,
      bind: {
        value: value,
        onChange: function onChange(event) {
          if (isObject(event) && isObject(event.target)) {
            setValue(event.target.value);
          } else {
            setValue(event);
          }
        }
      }
    });
  });
};

var Focus = function Focus(_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange"]);

  return createElement(Value, {
    initial: false,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        set = _ref2.set;
    return renderProps(props, {
      focused: value,
      bind: {
        onFocus: function onFocus() {
          return set(true);
        },
        onBlur: function onBlur() {
          return set(false);
        }
      }
    });
  });
};

var FocusManager = function FocusManager(_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange"]);

  var canBlur = true;
  return createElement(Value, {
    initial: false,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        set = _ref2.set;
    return renderProps(props, {
      focused: value,
      blur: function blur() {
        if (value) {
          document.activeElement.blur();
        }
      },
      bind: {
        tabIndex: -1,
        onBlur: function onBlur() {
          if (canBlur) {
            set(false);
          }
        },
        onFocus: function onFocus() {
          set(true);
        },
        onMouseDown: function onMouseDown() {
          canBlur = false;
        },
        onMouseUp: function onMouseUp() {
          canBlur = true;
        }
      }
    });
  });
};

var isObject$1 = function isObject(value) {
  return typeof value === 'object' && value;
};

var Form = function Form(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? {} : _ref$initial,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["initial", "onChange"]);

  return createElement(Value, {
    initial: _extends({}, initial),
    onChange: onChange
  }, function (_ref2) {
    var values = _ref2.value,
        set = _ref2.set,
        reset = _ref2.reset;
    return renderProps(props, {
      values: values,
      reset: reset,
      setValues: function setValues(nextValues) {
        return set(function (prev) {
          return _extends({}, prev, typeof nextValues === 'function' ? nextValues(prev) : nextValues);
        });
      },
      field: function field(id) {
        var value = values[id];

        var setValue = function setValue(updater) {
          var _extends3;

          return typeof updater === 'function' ? set(function (prev) {
            var _extends2;

            return _extends({}, prev, (_extends2 = {}, _extends2[id] = updater(prev[id]), _extends2));
          }) : set(_extends({}, values, (_extends3 = {}, _extends3[id] = updater, _extends3)));
        };

        return {
          value: value,
          set: setValue,
          bind: {
            value: value,
            onChange: function onChange(event) {
              if (isObject$1(event) && isObject$1(event.target)) {
                setValue(event.target.value);
              } else {
                setValue(event);
              }
            }
          }
        };
      }
    });
  });
};

var Hover = function Hover(_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange"]);

  return createElement(Value, {
    initial: false,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        set = _ref2.set;
    return renderProps(props, {
      hovered: value,
      bind: {
        onMouseEnter: function onMouseEnter() {
          return set(true);
        },
        onMouseLeave: function onMouseLeave() {
          return set(false);
        }
      }
    });
  });
};

var Interval =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Interval, _Component);

  function Interval() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      times: 0
    };
    _this.intervalId = undefined;

    _this._clearIntervalIfNecessary = function () {
      if (_this.intervalId) {
        _this.intervalId = clearInterval(_this.intervalId);
      }
    };

    _this._setIntervalIfNecessary = function (delay) {
      if (Number.isFinite(delay)) {
        _this.intervalId = setInterval(function () {
          return _this.setState(function (s) {
            return {
              times: s.times + 1
            };
          });
        }, delay);
      }
    };

    _this.stop = function () {
      _this._clearIntervalIfNecessary();
    };

    _this.start = function (delay) {
      var _delay = typeof delay === 'number' ? delay : _this.props.delay != null ? _this.props.delay : 1000;

      _this._setIntervalIfNecessary(_delay);
    };

    _this.toggle = function () {
      _this.intervalId ? _this.stop() : _this.start();
    };

    return _this;
  }

  var _proto = Interval.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.start();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.delay !== this.props.delay) {
      this.stop();
      this.start();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stop();
  };

  _proto.render = function render() {
    return renderProps(this.props, {
      start: this.start,
      stop: this.stop,
      toggle: this.toggle
    });
  };

  return Interval;
}(Component);

var complement = function complement(fn) {
  return function () {
    return !fn.apply(void 0, arguments);
  };
};

var List = function List(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? [] : _ref$initial,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["initial", "onChange"]);

  return createElement(Value, {
    initial: initial,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        _set = _ref2.set,
        reset = _ref2.reset;
    return renderProps(props, {
      list: value,
      first: function first() {
        return value[0];
      },
      last: function last() {
        return value[Math.max(0, value.length - 1)];
      },
      set: function set(list) {
        return _set(list);
      },
      push: function push() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }

        return _set(function (list) {
          return list.concat(values);
        });
      },
      pull: function pull(predicate) {
        return _set(function (list) {
          return list.filter(complement(predicate));
        });
      },
      sort: function sort(compareFn) {
        return _set(function (list) {
          return list.concat().sort(compareFn);
        });
      },
      reset: reset
    });
  });
};

var Map = function Map(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? {} : _ref$initial,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["initial", "onChange"]);

  return createElement(Value, {
    initial: _extends({}, initial),
    onChange: onChange
  }, function (_ref2) {
    var values = _ref2.value,
        _set = _ref2.set,
        reset = _ref2.reset;
    return renderProps(props, {
      values: values,
      clear: function clear() {
        return _set({});
      },
      reset: reset,
      set: function set(key, updater) {
        return _set(function (prev) {
          var _extends2;

          return _extends({}, prev, (_extends2 = {}, _extends2[key] = typeof updater === 'function' ? updater(prev[key]) : updater, _extends2));
        });
      },
      get: function get(key) {
        return values[key];
      },
      has: function has(key) {
        return values[key] != null;
      },
      delete: function _delete(key) {
        return _set(function (_ref3) {
          var deleted = _ref3[key],
              prev = _objectWithoutPropertiesLoose(_ref3, [key]);

          return prev;
        });
      }
    });
  });
};

var unique = function unique(arr) {
  return arr.filter(function (d, i) {
    return arr.indexOf(d) === i;
  });
};

var hasItem = function hasItem(arr, item) {
  return arr.indexOf(item) !== -1;
};

var removeItem = function removeItem(arr, item) {
  return hasItem(arr, item) ? arr.filter(function (d) {
    return d !== item;
  }) : arr;
};

var addUnique = function addUnique(arr, item) {
  return hasItem(arr, item) ? arr : arr.concat([item]);
};

var Set = function Set(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? [] : _ref$initial,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["initial", "onChange"]);

  return createElement(Value, {
    initial: unique(initial),
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        set = _ref2.set,
        reset = _ref2.reset;
    return renderProps(props, {
      values: value,
      add: function add(key) {
        return set(function (values) {
          return addUnique(values, key);
        });
      },
      clear: function clear() {
        return set([]);
      },
      remove: function remove(key) {
        return set(function (values) {
          return removeItem(values, key);
        });
      },
      has: function has(key) {
        return hasItem(value, key);
      },
      reset: reset
    });
  });
};

var State = function State(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? {} : _ref$initial,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["initial", "onChange"]);

  return createElement(Value, {
    initial: initial,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        set = _ref2.set,
        reset = _ref2.reset;
    return renderProps(props, {
      state: value,
      setState: function setState(updater, cb) {
        return set(function (prev) {
          return _extends({}, prev, typeof updater === 'function' ? updater(prev) : updater);
        }, cb);
      },
      resetState: reset
    });
  });
};

var Toggle = function Toggle(_ref) {
  var _ref$initial = _ref.initial,
      initial = _ref$initial === void 0 ? false : _ref$initial,
      onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["initial", "onChange"]);

  return createElement(Value, {
    initial: initial,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        _set = _ref2.set,
        reset = _ref2.reset;
    return renderProps(props, {
      on: value,
      toggle: function toggle() {
        return _set(function (on) {
          return !on;
        });
      },
      set: function set(value) {
        return _set(value);
      },
      reset: reset
    });
  });
};

var Touch = function Touch(_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutPropertiesLoose(_ref, ["onChange"]);

  return createElement(Value, {
    initial: false,
    onChange: onChange
  }, function (_ref2) {
    var value = _ref2.value,
        set = _ref2.set;
    return renderProps(props, {
      touched: value,
      bind: {
        onTouchStart: function onTouchStart() {
          return set(true);
        },
        onTouchEnd: function onTouchEnd() {
          return set(false);
        }
      }
    });
  });
};

var composeEvents = function composeEvents() {
  for (var _len = arguments.length, objEvents = new Array(_len), _key = 0; _key < _len; _key++) {
    objEvents[_key] = arguments[_key];
  }

  return objEvents.reverse().reduce(function (allEvents, events) {
    var append = {};

    var _loop = function _loop(key) {
      append[key] = allEvents[key] ? // Already have this event: let's merge
      function () {
        events[key].apply(events, arguments);
        allEvents[key].apply(allEvents, arguments);
      } : // Don't have this event yet: just assign the event
      events[key];
    };

    for (var key in events) {
      _loop(key);
    }

    return _extends({}, allEvents, append);
  });
};

export { Active, Compose, Counter, Input as Field, Focus, FocusManager, Form, Hover, Interval, List, Map, Set, State, Toggle, Touch, Value, compose, composeEvents, renderProps };
