// Generated by CoffeeScript 2.1.0
var CFX;

import {
  storiesOf
} from '@storybook/react';

import {
  Welcome
} from '@storybook/react/demo';

import {
  prefixDom
} from 'cfx.dom';

CFX = prefixDom({Welcome});

export default function() {
  return storiesOf('Welcome', module).add('to Storybook', () => {
    var c_Welcome;
    ({c_Welcome} = CFX);
    return c_Welcome({});
  });
};
