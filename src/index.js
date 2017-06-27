import addons from '@storybook/addons';
import axe from 'axe-core';
import A11yManager from './A11yManager';
import * as shared from './shared'

const manager = new A11yManager();

function checkA11y(storyFn, context) {
  const channel = addons.getChannel();
  return manager.wrapStory(channel, storyFn, context);
}

function checkA11yWithConfiguration(configuration) {
  axe.configure(configuration);
  return checkA11y;
}

export {
  checkA11y,
  checkA11yWithConfiguration,
  shared,
};
