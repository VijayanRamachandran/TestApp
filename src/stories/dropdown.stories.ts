import { action } from '@storybook/addon-actions';
import { Story, Meta } from '@storybook/angular/types-6-0';
import Dropdown from './dropdown.component';

export default {
    title: 'Shui/Dropdown',
    component: Dropdown,
    parameters:{ layout:'centered', },
  } as Meta;

const Template: Story<Dropdown> = (args: Dropdown) => ({
    props: args,
    onClick: action('click'),
  });

export const DropdownLightTheme = Template.bind({});
DropdownLightTheme.args = {
    theme: 'light',
    condensed: false,
    label: 'Default',
    value: 'Item 3',
    error: false,
};

export const DropdownDarkTheme = Template.bind({});
DropdownDarkTheme.args = {
    theme: 'dark',
    condensed: false,
    label: 'Default',
    value: 'Item 3',
    error: false,
};

export const DropdownLabel = Template.bind({});
DropdownLabel.args = {
    condensed: false,
    label: 'Default',
    error: false,
};

export const DropdownCondensed = Template.bind({});
DropdownCondensed.args = {
    condensed: true,
    label: 'Default',
    value: 'Item 3',
    error: false,
};

export const DropdownNoBorder = Template.bind({});
DropdownNoBorder.args = {
  condensed: false,
  label: 'Default',
  value: 'Item 9',
  noborder: true,
  error: false,
};

export const DropdownValue = Template.bind({});
DropdownValue.args = {
    condensed: false,
    label: 'Default',
    value: 'Item 2',
    error: false,
};

export const DropdownItems = Template.bind({});
DropdownItems.args = {
    condensed: false,
    label: 'Default',
    value: 'Item 3',
    error: false,
    items: 3,
};

export const DropdownError = Template.bind({});
DropdownError.args = {
    condensed: false,
    label: 'Default',
    value: 'Error',
    error: true,
};

export const DropdownErrorMessage = Template.bind({});
DropdownErrorMessage.args = {
    condensed: false,
    label: 'Default',
    value: 'Error',
    error: true,
    errorMessage: 'Error Message( Optional )',
};

export const DropdownEditable = Template.bind({});
DropdownEditable.args = {
    condensed: false,
    label: 'Default',
    error: false,
    editable: true,
};

export const DropdownSafety = Template.bind({});
DropdownSafety.args = {
    condensed: false,
    label: 'Default',
    error: false,
    editable: false,
    safety: true,
};

export const DropdownMultiSelect = Template.bind({});
DropdownMultiSelect.args = {
    condensed: false,
    label: 'Default',
    multiselect: true,
};

export const DropdownDisabled = Template.bind({});
DropdownDisabled.args = {
    condensed: false,
    label: 'Default',
    error: false,
    editable: false,
    disabled: true,
};

export const DropdownMandatory = Template.bind({});
DropdownMandatory.args = {
    condensed: false,
    label: 'Default',
    mandatory: true,
};

export const DropdownSuccess = Template.bind({});
DropdownSuccess.args = {
    condensed: false,
    label: 'Default',
    mandatory: true,
    success: true,
};