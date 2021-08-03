import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
    title: 'Shui/Button',
    component: Button
  } as Meta;

const Template: Story<Button> = (args: Button) => ({
    props: args,
  });

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  color: 'tertiary',
  label: 'Tertiary',
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  label: 'Primary',
  size: 's',
};

export const Medium = Template.bind({});
Medium.args = {
  color: 'primary',
  label: 'Primary',
  size: 'm',
};

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  label: 'Primary',
  size: 'l',
};

export const Auto = Template.bind({});
Auto.args = {
  color: 'primary',
  label: 'Storybook Documentation',
  size: 'auto',
};