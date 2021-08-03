import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-progressbar',
  template: `<sh-progress [value]=value 
                          [label]=label
                          [info]=info
                          [header]=header></sh-progress>`
})

export default class ProgressComponent {
  
  @Input()
  value = '';

  @Input()
  label = '';

  @Input()
  info = '';

  @Input()
  header = '';
}
  
