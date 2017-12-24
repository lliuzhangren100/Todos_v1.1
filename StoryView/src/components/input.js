// Generated by CoffeeScript 2.1.0
var CFX, Input, Item, actions, constants, getStore, reducers;

import {
  prefixDom
} from 'cfx.dom';

import React, {
  Component
} from 'react';

import {
  List,
  Icon,
  NavBar,
  Popover,
  InputItem
} from 'antd-mobile';

import {
  store
} from 'ReduxServ';

({constants, actions, reducers, getStore} = store);

({Item} = Popover);

CFX = prefixDom({'div': 'div', Item, Icon, NavBar, Popover, InputItem, List});

Input = class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disalbe: true
    };
    this;
  }

  render() {
    var blur, c_Icon, c_InputItem, c_Item, c_List, c_NavBar, c_Popover, c_div, onBlur, onSelect, selectStyl, selector;
    ({c_div, c_Item, c_Icon, c_NavBar, c_Popover, c_InputItem, c_List} = CFX);
    selector = this.props.selector != null ? this.props.selector : (selector) => {
      console.log('Pls use props selector.');
      return console.log(selector);
    };
    blur = this.props.blur != null ? this.props.blur : (blur) => {
      return console.log('Pls use props blur');
    };
    onSelect = (opt) => {
      return selector(opt.props.value);
    };
    onBlur = (v) => {
      return blur(v);
    };
    selectStyl = function(filter, itemValue, opt) {
      if (filter === itemValue) {
        return {
          color: 'red'
        };
      }
    };
    return c_NavBar({
      mode: 'light',
      rightContent: c_Popover({
        overlayClassName: 'fortest',
        overlayStyle: {
          color: 'currentColor'
        },
        visible: this.props.disable,
        overlay: [
          c_Item({
            key: '1',
            value: 'active',
            style: selectStyl(this.props.filter,
          'active')
          },
          'Active'),
          c_Item({
            key: '2',
            value: 'completed',
            style: selectStyl(this.props.filter,
          'completed')
          },
          'Completed'),
          c_Item({
            key: '3',
            value: 'all',
            style: selectStyl(this.props.filter,
          'all')
          },
          'All')
        ],
        // onVisibleChange: onVisibleChange
        onSelect: onSelect
      }, c_div({
        style: {
          height: '100%',
          padding: '0 15px',
          marginRight: '-15px',
          display: 'flex',
          alignItems: 'center'
        }
      }, c_Icon({
        type: 'ellipsis'
      })))
    }, c_InputItem({
      placeholder: 'What needs to be done',
      onBlur: onBlur
    }));
  }

};

export default Input;
