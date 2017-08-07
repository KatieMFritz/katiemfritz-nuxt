<template>
  <div>
    <o-header/>
    <nuxt/>
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

