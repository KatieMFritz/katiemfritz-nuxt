<template>
<footer class="o-footer" role="contentinfo">
  <div class="l-container">

    <m-contact-nav/>

    <section class="u-center-text" "content-info">
      <p v-html="colophon"></p>
    </section>
  </div>
</footer><!-- end o-footer -->
</template>

<script>
import mContactNav from '../molecules/m-contact-nav.vue'

export default {
  data () {
    return {
      colophon: 'Copyright © 2017 Katie M Fritz, LLC. All rights reserved &nbsp;•&nbsp; Built with <a href="https://nuxtjs.org/">NuxtJS</a>.'
    }
  },
  components: {
    'm-contact-nav': mContactNav
  }
}
</script>
