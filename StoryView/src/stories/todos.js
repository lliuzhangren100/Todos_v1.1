// Generated by CoffeeScript 2.1.0
var CFX;

import {
  storiesOf
} from '@storybook/react';

import {
  prefixDom
} from 'cfx.dom';

import 'antd-mobile/dist/antd-mobile.css';

import Todos from '../components';

CFX = prefixDom({Todos});

export default function() {
  return storiesOf('Todos', module).add('Index', () => {
    var c_Todos;
    ({c_Todos} = CFX);
    return c_Todos({});
  });
};
