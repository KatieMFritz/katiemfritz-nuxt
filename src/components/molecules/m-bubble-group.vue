<template>
<section class="m-bubble-group l-container l-slice--l">
  <a-bubble
    v-for="bubble in bubbles"
    :key="bubble.id"
    :content="bubble.content"
  ></a-bubble>
</section>
</template>

<script>
import aBubble from '../atoms/a-bubble.vue'

export default {
  props: ['bubbles'],
  components: {
    'a-bubble': aBubble
  }
}
</script>
