import { Story, Meta } from '@storybook/angular/types-6-0';
import Progressbar from './progressbar.component';

export default {
    title: 'SHUI Components/Progressbar',
    component: Progressbar,
    parameters:{ layout:'padded', },
  } as Meta;

const Template: Story<Progressbar> = (args: Progressbar) => ({
    props: args,
  });

export const ProgressbarValue = Template.bind({});
ProgressbarValue.args = {
    value: '36',
};

export const ProgressbarLabel = Template.bind({});
ProgressbarLabel.args = {
    value: '36',
    label: '36%',
};

export const ProgressbarInfo = Template.bind({});
ProgressbarInfo.args = {
    value: '36',
    label: '36%',
    info: '5 minutes remaining',
};

export const ProgressbarHeader = Template.bind({});
ProgressbarHeader.args = {
    value: '36',
    label: '36%',
    info: '5 minutes remaining',
    header: "Send to PACS",
};