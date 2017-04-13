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

<style lang="scss">
  @import '../assets/scss/_reset';
  @import '../assets/scss/_variables';
  @import '../assets/scss/_utilities';

  /*Typography*/

  html {
    font-size: 100%;
    font-family: $font-sans-serif;
    color: $color-text;
  }

  a {
    color: $color-link;

    &:hover {
      color: $color-link-hover;
    }
  }

  p {
    margin: 1.5rem 0;
    font-size: 1.2 * $font-size-base;
    line-height: 1.5;
  }

  li {
    font-size: 1.2 * $font-size-base;
  }

  h1 {
    font-size: 2.5 * $font-size-base;
  }

  h2 {
    font-size: 2 * $font-size-base;
  }

  h3 {
    font-size: 1.5 * $font-size-base;
  }

  /****
  Vertical flow and grid
  *****/
  main * + * {
    margin-top: 1.5rem;
  }

  main {
    padding-bottom: 3rem;
  }

  li, dt, dd, br, th, td {
    margin-top: 0;
  }

  * + h2 {
    margin-top: 3rem;
  }

  * + h3 {
    margin-top: 1.5rem;
  }

  main li {
    margin-bottom: .5rem;
  }

  /*****************
  NAVIGATION
  ******************/
  .c-nav {
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    overflow: auto;
  }

  .c-nav__item {
    display: inline;
    margin-right: $space-default;
  }

  .c-nav__link {
    display: inline-block;
    padding: $space-inset-default;
    text-decoration: none;
  }

  /******************************
  HEADER
  *******************************/
  .c-header {
    background-color: $color-gray-light;
    padding-bottom: 3vw;
  }

  .c-logo {
    max-height: 4rem;
    .c-logo__img {
      height: 100%;
    }
  }

  .c-nav--header {
    display: flex;
    justify-content: space-between;
  }

  .c-nav--header .active {
    border-bottom: 3px solid $color-link;
  }

  /****************************
  Special Components
  *****************************/
  .c-toc {
    background-color: $color-gray-light;
    padding: 1.5em;
  }

  .c-card {
    border-bottom: 2px dashed color-primary;
    padding-bottom: 2em;
    margin-bottom: 2em;
  }

  .c-card:last-child {
    border-bottom: none;
  }
  /***************************
  FOOTER
  ****************************/
  .c-footer {
    background-color: $color-gray-light;
    padding: $space-l 0;
  }

  .icon {
    font-size: 1.5 * $font-size-base;
    font-weight: bold;
  }

</style>
