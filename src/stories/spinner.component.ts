import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-spinner',
  template: `<sh-spinner  [label]=label
                          [size]=size></sh-spinner>`
})

export default class SpinnerComponent {
  
  @Input()
  label = '';

  @Input()
  size = '';
}
  
