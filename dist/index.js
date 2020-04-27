'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));

const MyComponent = styled.div.withConfig({
  displayName: "sc-repro__MyComponent",
  componentId: "sc-18r44ql-0"
})(["color:red;"]);

exports.MyComponent = MyComponent;
