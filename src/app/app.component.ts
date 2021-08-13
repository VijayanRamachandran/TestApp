import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<sh-page [theme]="themeValue">
                <sh-dropdown [label]="label"                             
                             [condensed]="condensed"
                             [value]="value"                             
                             [items]="items"
                             [attr.multi-select]="multiselect === true ? true : undefined"
                             [attr.no-border]="noborder === true ? true : undefined"
                             [error]="error"
                             [success]="success"
                             [attr.error-message]="errorMessage">
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
              </sh-page>`,
  styles: []
})
export class AppComponent {
  title = 'my-shui-app';

  @Input()
  themeValue = 'dark';

  @Input()
  condensed = false;

  @Input()
  label = 'label';

  @Input()
  value = 'Item 3';

  @Input()
  noborder = false;
  
  @Input()
  error = false;

  @Input()
  errorMessage = 'Error Message ( Optional )';

  @Input()
  items = 3;

  @Input()
  multiselect = false;

  @Input()
  success = false;
}
