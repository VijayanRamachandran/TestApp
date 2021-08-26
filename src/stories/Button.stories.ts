import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/angular/types-6-0';
import Button from './button.component';

export default {
    title: 'SHUI Components/Button',
    component: Button,
    parameters:{ layout:'centered',
                 /* HTML Events to top Rendered Element */
                 actions: { handles: ['mouseover', 'click'  ],  },
              },    
  } as Meta;

const Template: Story<Button> = (args: Button) => ({
    props: args,
    onClick: action('onClick'),
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