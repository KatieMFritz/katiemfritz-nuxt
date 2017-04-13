<template>
  <section class="container">
    <h1>Services</h1>
    <ul>
      <li v-for="service in services">
        {{ service.name }}
      </li>
    </ul>
  </section>
</template>

<script>
import pageHead from '../helpers/page-head'

// Instead of listing services, perhaps a "Questions I Answer?"
var SERVICES = [
  {
    name: 'Sustainable Website Development'
  },
  {
    name: 'Website Review Package'
  },
  {
    name: 'Web Strategy Package'
  },
  {
    name: 'Information Architecture Package'
  },
  {
    name: 'User Testing Package'
  },
  {
    name: 'Website Coaching'
  }
]

export default {
  head: pageHead({
    title: 'Services'
  }),
  data () {
    return {
      services: SERVICES
    }
  }
}
</script>
