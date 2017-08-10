<template>
  <main id="main" role="main">
    <div class="l-container l-slice--l u-clearfix">
      <h1>Sorry, couldn't find the page you requested.</h1>
      <img class="a-img--portrait l-top l-right" src="../assets/images/mac_at_work.jpg" alt="MacGyver doing web consulting">
      <p>Broken link? <a href="mailto:katie@katiemfritz.com">Send me an email.</a></p>
      <p>Here's a cat picture.</p>
    </div>
  </main>
</template>

<script>
import pageHead from '../helpers/page-head'

export default {
  props: ['error'],
  head: pageHead({
    title: 'Page Not Found (404)',
    robots: 'nofollow'
  })
}
</script>
