<template>
<section class="m-cta l-container l-slice--l">

  <a-arrow/>

  <p v-html="message"></p>

</section>
</template>

<script>
import aArrow from '../atoms/a-arrow.vue'

export default {
  props: ['message'],
  components: {
    'a-arrow': aArrow
  }
}
</script>
