<template>
  <section class="m-banner">
    <div class="l-container m-banner--content">
      <h1 class="m-banner--title">{{ headline }}</h1>
      <p class="m-banner--tagline">{{ body }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      headline: 'Revive your website',
      body: 'Transform a necessary evil into an empowering, intuitive resource for you and those you serve.'
    }
  }
}
</script>

<style lang="scss">
  @import '~@variables';

  .m-banner {
    background-color: $color-primary;
    margin: $space-stack-l;
    @media (max-width: 600px) {
      margin: $space-stack-m;
    }
  }

  .m-banner--content {
    padding: $space-inset-l;

    h1,
    p {
      color: $color-white;
      font-family: $font-serif;
    }

    h1 {
      font-weight: 700;
      line-height: 1;
    }

    p {
      font-size: 1.25rem;
    }

    p:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 600px) and (max-width: 800px) {
      h1 {
        font-size: 3rem;
      }
    }

    @media (min-width: 800px) {
      padding: $space-inset-xl;

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 2rem;
      }
    }
  }

</style>
