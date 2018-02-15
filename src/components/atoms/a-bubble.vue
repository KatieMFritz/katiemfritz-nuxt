<template>
<div class="a-bubble" v-html="content"></div>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="scss">
  @import '~@variables';

  $color-bubble-green: shade($color-green, 10%);
  $color-bubble-teal: shade($color-teal, 10%);
  $bubble-border-radius: 8px;

  .a-bubble {
    background: $color-secondary;
    border-radius: $bubble-border-radius;
    padding: $space-inset-m;
    position: relative;

    &::after {
      border: $space-m solid transparent;
      border-bottom: 0;
      border-left: 0;
      border-top-color: $color-secondary;
      bottom: 0;
      content: '';
      height: 0;
      left: 10%;
      margin-bottom: (-$space-m);
      margin-left: (-$space-s);
      position: absolute;
      width: 0;
    }

    // Typography overrides
    h1, h2, h3, h4, h5, h6, p, a {
      color: $color-white;
      font-weight: bold;
      line-height: 1.5;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      text-decoration: underline;
    }

    strong {
      font-family: $font-serif;
      font-size: $font-large;
    }

    // Color variations for bubble groups
    &:nth-child(4n+1) {
      background: $color-bubble-green;

      &::after {
        border-top-color: $color-bubble-green;
      }
    }

    &:nth-child(4n+2) {
      background: $color-accent;

      h1, h2, h3, h4, h5, h6, p, a {
        color: $color-gray-dark;
      }

      &::after {
        border-top-color: $color-accent;
      }
    }

    &:nth-child(4n+3) {
      background: $color-gray-base;

      &::after {
        border-top-color: $color-gray-base;
      }
    }

    &:nth-child(4n+4) {
      background: $color-bubble-teal;

      &::after {
        border-top-color: $color-bubble-teal;
      }
    }
  }
</style>

