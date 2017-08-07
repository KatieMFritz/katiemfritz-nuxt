<template>
  <main role="main">
    <m-banner/>
    <m-cta/>
  </main>
</template>

<script>
import pageHead from '../helpers/page-head'
import mBanner from '../components/molecules/m-banner.vue'
import mCta from '../components/molecules/m-cta.vue'

export default {
  head: pageHead({
    title: 'Home'
  }),
  components: {
    'm-banner': mBanner,
    'm-cta': mCta
  }
}
</script>
