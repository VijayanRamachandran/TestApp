import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button',
  template: `<sh-button [color]=color 
                        [label]=label
                        [size]=size
                        (click)="click()"></sh-button>`
})

export default class ButtonComponent {
  
  @Input()
  color: 'primary' | 'secondary' | 'tertiary' = 'primary';

  @Input()
  label: 'Primary' | 'Secondary' | 'Tertiary' = 'Primary';

  @Input()
  size: 's' | 'm' | 'l' | 'auto' = 'auto';

  @Output()
  onClick  = new EventEmitter<Event>();

  click() : void {
    this.onClick.emit();
  }
}
  
