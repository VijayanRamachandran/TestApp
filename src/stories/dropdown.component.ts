
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-dropdown',
  template: `<sh-page [theme]="theme" scrollable>
                <sh-dropdown [label]="label"
                             [value]="value"                             
                             [items]="items"
                             [editable]="editable"
                             [mandatory]="mandatory"
                             [disabled]="disabled"
                             [success]="success"
                             [safety]="safety"
                             [error]="error"
                             [attr.error-message]="errorMessage"
                             [condensed]="condensed"                                                          
                             [attr.no-border]="noborder === true ? true : undefined"
                             [attr.multi-select]="multiselect === true ? true : undefined">
                    <sh-menu-item label='Item 1'></sh-menu-item>
                    <sh-menu-item label='Item 2'></sh-menu-item>
                    <sh-menu-item label='Item 3'></sh-menu-item>
                    <sh-menu-item label='Item 4'></sh-menu-item>
                    <sh-menu-item label='Item 5'></sh-menu-item>
                    <sh-menu-item label='Item 6'></sh-menu-item>
                    <sh-menu-item label='Item 7'></sh-menu-item>
                    <sh-menu-item label='Item 8'></sh-menu-item>
                    <sh-menu-item label='Item 9'></sh-menu-item>
                    <sh-menu-item label='Item 10'></sh-menu-item>
                </sh-dropdown>
            </sh-page>`
})

export default class DropDownComponent {

    @Input()
    theme?: string;

    @Input()
    condensed = false;

    @Input()
    disabled = false;

    @Input()
    mandatory = false;

    @Input()
    label?: string;

    @Input()
    value?: string;

    @Input()
    noborder = false;
    
    @Input()
    error = false;

    @Input()
    errorMessage?: string;

    @Input()
    editable = false;

    @Input()
    items;

    @Input()
    safety = false;

    @Input()
    success = false;

    @Input()
    multiselect = false;
}