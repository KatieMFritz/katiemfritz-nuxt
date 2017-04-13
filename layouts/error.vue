<template>
  <main id="main" role="main">
    <div class="u-container">
      <h1>Sorry, couldn't find the page you requested.</h1>

      <p>Broken link? <a href="mailto:katie@katiemfritz.com">Send me an email.</a></p>

      <p>Here's a cat picture!</p>
      <!--
      I'd be careful with this. There's actually no guarantee that the image
      will be a cat and not a pussy. ;-)
      -->
      <a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&amp;type=gif"></a>
    </div>
  </main>
</template>

<script>
export default {
  props: ['error']
}
</script>
