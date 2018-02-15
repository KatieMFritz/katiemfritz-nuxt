import { storiesOf } from '@storybook/vue'

// Arrow
import AArrow from '../components/atoms/a-arrow.vue'

storiesOf('A: Arrows', module)
  .add('default arrow', () => ({
    components: { AArrow },
    template: '<a-arrow></a-arrow>'
  }))

// Bubble
import ABubble from '../components/atoms/a-bubble.vue'

storiesOf('A: Bubbles', module)
  .add('simple bubble', () => ({
    components: { ABubble },
    template: '<a-bubble :content="content"></a-bubble>',
    data () {
      return {
        content: '<p>Is our website <strong>working for us</strong>?</p>'
      }
    }
  }))
  .add('complex bubble', () => ({
    components: { ABubble },
    template: '<a-bubble :content="content"></a-bubble>',
    data () {
      return {
        content: '<h3>Content Strategy Course</h3><p>In this interactive course, you\'ll gain deeper understanding of your website and how to maintain it. <a href="#">Sign up today!</a></p>'
      }
    }
  }))

// Banner
import MBanner from '../components/molecules/m-banner.vue'

storiesOf('M: Banners', module)
  .add('banner', () => ({
    components: { MBanner },
    template: '<m-banner></m-banner>'
  }))

// Call to Action
import MCta from '../components/molecules/m-cta.vue'

storiesOf('M: CTA', module)
  .add('CTA short', () => ({
    components: { MCta },
    template: '<m-cta :message="cta"></m-cta>',
    data () {
      return {
        cta: '<a href="javascript:void(0)">Get started</a>'
      }
    }
  }))

  .add('CTA longer', () => ({
    components: { MCta },
    template: '<m-cta :message="cta"></m-cta>',
    data () {
      return {
        cta: 'I can help you answer these and <a href="javascript:void(0)">many other questions</a>.'
      }
    }
  }))

// Bubble Group
import MBubbleGroup from '../components/molecules/m-bubble-group.vue'

storiesOf('M: Bubble Group', module)
  .add('bubble group of 2', () => ({
    components: { MBubbleGroup },
    template: '<m-bubble-group :bubbles="bubbles"></m-bubble-group>',
    data () {
      return {
        bubbles: [
          { content: '<p>Is our website <strong>working for us</strong>?</p>' },
          { content: '<p>How do I <strong>update</strong> this website?</p>' }
        ]
      }
    }
  }))

  .add('bubble group of 3', () => ({
    components: { MBubbleGroup },
    template: '<m-bubble-group :bubbles="bubbles"></m-bubble-group>',
    data () {
      return {
        bubbles: [
          { content: '<p>Is our website <strong>working for us</strong>?</p>' },
          { content: '<p>How do I <strong>update</strong> this website?</p>' },
          { content: '<p>How do we <strong>organize</strong> all this information?</p>' }
        ]
      }
    }
  }))

  .add('bubble group of 4', () => ({
    components: { MBubbleGroup },
    template: '<m-bubble-group :bubbles="bubbles"></m-bubble-group>',
    data () {
      return {
        bubbles: [
          { content: '<p>Is our website <strong>working for us</strong>?</p>' },
          { content: '<p>How do I <strong>update</strong> this website?</p>' },
          { content: '<p>How do we <strong>organize</strong> all this information?</p>' },
          { content: '<p>How can our website be <strong>more accessible</strong>?</p>' }
        ]
      }
    }
  }))

  .add('bubble group of 10', () => ({
    components: { MBubbleGroup },
    template: '<m-bubble-group :bubbles="bubbles"></m-bubble-group>',
    data () {
      return {
        bubbles: [
          { content: '<p>Is our website <strong>working for us</strong>?</p>' },
          { content: '<p>How do I <strong>update</strong> this website?</p>' },
          { content: '<p>How do we <strong>organize</strong> all this information?</p>' },
          { content: '<p>How can our website be <strong>more accessible</strong>?</p>' },
          { content: '<p>How well does this website work on <strong>mobile</strong>?</p>' },
          { content: '<p>How do we ensure <strong>consistent branding</strong>?</p>' },
          { content: '<p>How can we make our marketing more <strong>efficient</strong>?</p>' },
          { content: '<p>What <strong>content</strong> does our website need?</p>' },
          { content: '<p>Who are we trying to <strong>reach</strong> with our site?</p>' },
          { content: '<p>How can we make our website <strong>last longer</strong>?</p>' }
        ]
      }
    }
  }))
