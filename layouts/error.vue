<template>
  <main id="main" role="main">
    <div class="u-container">
      <h1>Sorry, couldn't find the page you requested.</h1>

      <p>Broken link? <a href="mailto:katie@katiemfritz.com">Send me an email.</a></p>

      <p>Here's a cat picture.</p>

      <img src="..\assets\images\mac_at_work.jpg" alt="MacGyver doing web consulting">
    </div>
  </main>
</template>

<script>
export default {
  props: ['error']
}
</script>
