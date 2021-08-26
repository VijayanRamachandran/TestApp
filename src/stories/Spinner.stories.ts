import { Story, Meta } from '@storybook/angular/types-6-0';
import Spinner from './spinner.component';

export default {
    title: 'SHUI Components/Spinner',
    component: Spinner,
    parameters:{ layout:'centered', docs: { page:null }},
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