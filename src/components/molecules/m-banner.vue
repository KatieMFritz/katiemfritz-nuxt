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
