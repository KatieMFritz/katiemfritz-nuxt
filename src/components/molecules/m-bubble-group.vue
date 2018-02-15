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

<style lang="scss">
  @import '~@variables';
  .m-bubble-group {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    list-style-type: none;

    .a-bubble {
      flex-basis: 12rem;
      flex-grow: 1;
      margin: 0 $space-m $space-l 0;
    }
  }
</style>

