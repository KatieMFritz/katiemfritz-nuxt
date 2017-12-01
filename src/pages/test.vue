<template>
  <main role="main" id="maincontent">
    <div class="l-container l-slice--l">

    </div>
  </main>
</template>

<script>
import pageHead from '../helpers/page-head'
import mAccordion from '../components/molecules/m-accordion'

export default {
  head: pageHead({
    title: 'Books',
    description: 'Tips for managing an ebook collection and reading notes.',
    image: 'https://katiemfritz.com/images/kindle.jpg',
    alt: 'Kindle stock photo'
  }),
  data () {
    return {
    }
  },
  components: {
    'm-accordion': mAccordion
  }
}
</script>
