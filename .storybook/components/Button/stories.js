import React from 'react';
import { storiesOf } from '@storybook/react';

import { checkA11yWithConfiguration } from './../../../src';

import Button from './component';

import Faker from 'faker';

const text = Faker.lorem.words();

storiesOf('<Button />', module)
  .addDecorator(checkA11yWithConfiguration({branding: {brand:"YO!BRAND",application:"YO!APPLICATION"}}))
  .add('Default', () => (
    <Button />
  ))
  .add('Content', () => (
    <Button content={text} />
  ))
  .add('Label', () => (
    <Button label={text} />
  ))
  .add('Disabled', () => (
    <Button
      disabled
      content={text}
    />
  ))
  .add('Invalid contrast', () => (
    <Button
      contrast="wrong"
      content={Faker.lorem.words()}
    />
  ));
