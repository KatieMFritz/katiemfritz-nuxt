<template>
  <main role="main">
    <mBanner/>
    <mCta/>
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
    mBanner: mBanner,
    mCta: mCta
  }
}
</script>
