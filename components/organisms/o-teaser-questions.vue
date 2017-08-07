<template>
<section class="o-teaser">
  <h2 class="l-container l-slice--l">{{ headline }}</h2>
  <m-bubble-group :bubbles="bubbles"/>
  <m-cta :message="cta"/>
</section>
</template>

<script>
import mBubbleGroup from '../molecules/m-bubble-group.vue'
import mCta from '../molecules/m-cta.vue'

export default {
  data () {
    return {
      headline: 'What do you want to know?',
      bubbles: [
        { content: 'Is our website <strong>working for us</strong>?' },
        { content: 'How do I <strong>update</strong> this website?' },
        { content: 'How do we <strong>organize</strong> all this information?' }
      ],
      cta: 'I can help you answer these <a href="/services" title="Services">and many other questions</a>.'
    }
  },
  components: {
    'm-bubble-group': mBubbleGroup,
    'm-cta': mCta
  }
}
</script>


</script>
