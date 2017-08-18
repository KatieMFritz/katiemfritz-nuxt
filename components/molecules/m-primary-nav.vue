<template>
<nav class="m-nav m-nav--primary">
  <ul class="m-nav__list">
    <li v-for="link in navLinks" class="m-nav__item m-nav__item--primary">
      <router-link :to="link.path" exact class="m-nav__link">
        {{ link.label }}
      </router-link>
    </li>
  </ul><!--end m-nav__list-->
</nav><!--end m-nav-->
</template>

<script>
export default {
  data () {
    return {
      navLinks: [
        {
          'path': '/',
          'label': 'Home'
        },
        {
          'path': '/about',
          'label': 'About'
        },
        {
          'path': '/services',
          'label': 'Services'
        }
      ]
    }
  }
}
</script>
