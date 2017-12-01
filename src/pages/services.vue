<template>
<main role="main" id="maincontent">
  <section class="l-slice--l l-container" v-html="intro"></section>
  <m-bubble-group :bubbles="bubbles"/>
  <m-cta :message="cta"/>
</main>
</template>

<script>
import pageHead from '../helpers/page-head'
import mBubbleGroup from '../components/molecules/m-bubble-group.vue'
import mCta from '../components/molecules/m-cta.vue'

var INTRO =
  '<h1>Services</h1>' +
  '<p>Have one or more of these questions? Ready to make things better? I can help.</p>' +
  '<p>I work <em>with</em> my clients, not <em>for</em> them. The more you put in, the more you\'ll get out. My custom services range from small communications consulting engagements to full website and web app development. Consulting engagements start around $500, websites start around $6,000 and I offer nonprofit discounts. <a href="#contact">Contact me</a> to learn more!</p>'

var BUBBLES = [
  { content: 'Is our website <strong>working for us</strong>?' },
  { content: 'How do I <strong>update</strong> this website?' },
  { content: 'How do we <strong>organize</strong> all this information?' },
  { content: 'How can our website be <strong>more accessible</strong>?' },
  { content: 'How well does this website work on <strong>mobile</strong>?' },
  { content: 'How do we ensure <strong>consistent branding</strong>?' },
  { content: 'How can we make our marketing more <strong>efficient</strong>?' },
  { content: 'What <strong>content</strong> does our website need?' },
  { content: 'Who are we trying to <strong>reach</strong> with our site?' },
  { content: 'How can we make our website <strong>last longer</strong>?' }
]

export default {
  head: pageHead({
    title: 'Services',
    description: 'Web design, web development, content strategy, user experience, nonprofit technology consulting, and more.'
  }),
  data () {
    return {
      intro: INTRO,
      bubbles: BUBBLES,
      cta: '<a href="mailto:katie@katiemfritz.com">Send me an email</a> to get started!'
    }
  },
  components: {
    'm-bubble-group': mBubbleGroup,
    'm-cta': mCta
  }
}
</script>
