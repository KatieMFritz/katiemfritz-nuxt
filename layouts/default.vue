<template>
  <div>
    <oHeader/>
    <nuxt/>
    <oFooter/>
  </div>
</template>

<script>
import oHeader from '~components/organisms/o-header.vue'
import oFooter from '~components/organisms/o-footer.vue'

export default {
  components: {
    oHeader: oHeader,
    oFooter: oFooter
  }
}
</script>

