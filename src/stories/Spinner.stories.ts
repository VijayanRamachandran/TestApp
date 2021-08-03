import { Story, Meta } from '@storybook/angular/types-6-0';
import Spinner from './spinner.component';

export default {
    title: 'Shui/Spinner',
    component: Spinner
  } as Meta;

const Template: Story<Spinner> = (args: Spinner) => ({
    props: args,
  });

export const SpinnerLabel = Template.bind({});
SpinnerLabel.args = {
    label: 'Loading',
};

export const SpinnerSize = Template.bind({});
SpinnerSize.args = {
    label: 'Loading',
    size: 's',
};