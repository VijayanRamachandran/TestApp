import * as Steps from 'screener-runner/src/steps';
import * as storiesOf from 'screener-runner/src/steps';
import Button from './button.component';

storiesOf('Button', module)
  .add('default', () => ({
    component: Button,
    props: {},
    steps: new Steps()
      .click('.selector')
        .snapshot('name')
        .end()
}));