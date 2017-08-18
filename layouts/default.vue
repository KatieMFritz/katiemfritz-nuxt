<template>
  <div>
    <a href="#maincontent">Skip to main content</a>
    <o-header/>
    <main role="main" id="maincontent">
      <nuxt/>
    </main>
    <o-footer/>
  </div>
</template>

<script>
import oHeader from '../components/organisms/o-header.vue'
import oFooter from '../components/organisms/o-footer.vue'

export default {
  components: {
    'o-header': oHeader,
    'o-footer': oFooter
  }
}
</script>

