<template>
  <main role="main">
    <KmfBanner/>
  </main>
</template>

<script>
import pageHead from '../helpers/page-head'
import KmfBanner from '~components/banner.vue'

export default {
  head: pageHead({
    title: 'Home'
  }),
  components: {
    KmfBanner: KmfBanner
  }
}
</script>
