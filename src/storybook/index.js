import { storiesOf } from '@storybook/vue'

import AArrow from '../components/atoms/a-arrow.vue'

storiesOf('AArrow', module)
  .add('arrow', () => ({
    components: { AArrow },
    template: '<a-arrow></a-arrow>'
  }))
