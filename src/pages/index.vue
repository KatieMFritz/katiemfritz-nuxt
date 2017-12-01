<template>
<main role="main" id="maincontent">
  <m-banner/>
  <o-teaser-questions/>
</main>
</template>

<script>
import pageHead from '../helpers/page-head'
import mBanner from '../components/molecules/m-banner.vue'
import oTeaserQuestions from '../components/organisms/o-teaser-questions.vue'

export default {
  head: pageHead({
    title: 'Home'
  }),
  components: {
    'm-banner': mBanner,
    'o-teaser-questions': oTeaserQuestions
  }
}
</script>
