<template>
<nav class="m-nav u-center-text">
  <h3 class="m-nav__heading" id="contact">{{ heading }}</h3>
  <ul class="m-nav__list">
    <li v-for="link in links" class="m-nav__item">
      <a :href="link.url" class="m-nav__link icon__link" :title="link.description">
        <span :class="link.class"></span>
        <span class="u-visually-hidden">{{ link.description }}</span>
      </a>
    </li>
  </ul><!--end m-nav__list-->
</nav><!--end m-nav-->
</template>

<script>
export default {
  data () {
    return {
      heading: 'Contact Me',
      links: [
        {
          'url': 'mailto:katie@katiemfritz.com',
          'class': 'icon icon-envelope',
          'description': 'Email'
        },
        {
          'url': 'https://github.com/katiemfritz',
          'class': 'icon icon-social-github',
          'description': 'Github'
        },
        {
          'url': 'https://www.linkedin.com/in/katiemfritz',
          'class': 'icon icon-social-linkedin',
          'description': 'LinkedIn'
        },
        {
          'url': 'https://www.facebook.com/katiemfritzllc',
          'class': 'icon icon-social-facebook',
          'description': 'Facebook'
        },
        {
          'url': 'https://twitter.com/KatieMaeFritz',
          'class': 'icon icon-social-twitter',
          'description': 'Twitter'
        }
      ]
    }
  }
}
</script>
