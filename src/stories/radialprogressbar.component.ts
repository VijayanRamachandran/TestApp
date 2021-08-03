import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-radialprogressbar',
  template: `<sh-progress radial
                          [value]=value 
                          [label]=label
                          [info]=info
                          [header]=header
                          [size]=size></sh-progress>`
})

export default class RadialProgressComponent {
  
  @Input()
  value = '';

  @Input()
  label = '';

  @Input()
  info = '';

  @Input()
  header = '';

  @Input()
  size = '';
}
  
