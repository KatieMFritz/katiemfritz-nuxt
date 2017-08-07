<template>
<nav class="m-nav m-nav--primary">
  <ul class="m-nav__list">
    <li v-for="link in links" class="m-nav__item m-nav__item--primary">
      <a :href="link.url" class="m-nav__link">{{ link.label }}</a>
    </li>
  </ul><!--end m-nav__list-->
</nav><!--end m-nav-->
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          'url': '/',
          'label': 'Home'
        },
        {
          'url': '/about',
          'label': 'About'
        },
        {
          'url': '/services',
          'label': 'Services'
        }
      ]
    }
  }
}
</script>
