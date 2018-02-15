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

<style lang="scss">
  @import '~@variables';
  .m-cta {
    align-items: flex-start;
    display: flex;
    flex-wrap: nowrap;
  }

  .m-cta:hover,
  .m-cta:focus {

    outline: none;

    a {
      @include link-hover;
    }

    @media(min-width: 260px) {

      .a-arrow {

        .a-arrow__point--right {
          border-left: 36px solid $color-arrows;
        }
      }
    }
  }

</style>
