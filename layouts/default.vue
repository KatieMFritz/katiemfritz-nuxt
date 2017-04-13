<template>
  <div>
    <KmfHeader/>
    <nuxt/>
    <KmfFooter/>
  </div>
</template>

<script>
import KmfHeader from '~components/header.vue'
import KmfFooter from '~components/footer.vue'

export default {
  components: {
    KmfHeader: KmfHeader,
    KmfFooter: KmfFooter
  }
}
</script>
