import { Story, Meta } from '@storybook/angular/types-6-0';
import RadialProgressbar from './radialprogressbar.component';
//import RadialProgressbarDocumentation from './RadialProgressbar-Documentation.mdx';

export default {
    title: 'SHUI Components/RadialProgressbar',
    component: RadialProgressbar,
    parameters:{ layout:'centered', /* docs: { page: RadialProgressbarDocumentation, } */},
  } as Meta;

const Template: Story<RadialProgressbar> = (args: RadialProgressbar) => ({
    props: args,
  });

export const ProgressbarValue = Template.bind({});
ProgressbarValue.args = {
    value: '36',
    size: "s",
};

export const ProgressbarLabel = Template.bind({});
ProgressbarLabel.args = {
    value: '36',
    label: '36%',
    size: "m",
};

export const ProgressbarInfo = Template.bind({});
ProgressbarInfo.args = {
    value: '36',
    label: '36%',
    info: '5 minutes remaining',
    size: "l",
};

export const ProgressbarHeader = Template.bind({});
ProgressbarHeader.args = {
    value: '36',
    label: '36%',
    info: '5 minutes remaining',
    header: "Send to PACS",
    size: "xl",
};