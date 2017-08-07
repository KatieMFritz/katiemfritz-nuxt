<template>
<section class="o-teaser">
  <h2 class="l-container">How can I help?</h2>
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
      bubbles: [
        { content: 'bubble <strong>one</strong>' },
        { content: 'bubble <strong>two</strong>' },
        { content: 'bubble <strong>three</strong>' }
      ],
      cta: 'Want to <a href="/services">learn more</a>?'
    }
  },
  components: {
    'm-bubble-group': mBubbleGroup,
    'm-cta': mCta
  }
}
</script>


</script>
