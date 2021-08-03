import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: `<sh-button [color]=color 
                        [label]=label
                        [size]=size></sh-button>`
})

export default class ButtonComponent {
  
  @Input()
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @Input()
  label: 'Primary' | 'Secondary' | 'Tertiary' = 'Primary';

  @Input()
  size: 's' | 'm' | 'l' | 'auto' = 'auto';
}
  
