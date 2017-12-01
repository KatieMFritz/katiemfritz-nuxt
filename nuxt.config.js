const siteName = 'Katie M Fritz, LLC'
const resolve = require('path').resolve

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    // Language
    htmlAttrs:
      { lang: 'en-US' },
    meta: [
      // Page Parsing
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Open Graph
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:site_name',
        content: siteName
      }
    ],
    link: [
      // Favicons
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/manifest.json' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#1995a9' },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' },

      // Fonts
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,700,700i|Josefin+Slab:400,700,700i' }
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-48626024-3' }]
  ],
  css: [
    {
      src: '~/assets/css/main.css',
      lang: 'css'
    }
  ],
  // Environment Variables
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    siteName: siteName
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1997A9' },
  /*
  ** sets new source directory for nuxt files
  */
  srcDir: 'src/',
  /*
  ** Build configuration
  */
  build: {
    extend (config, ctx) {
      /* Set aliases */
      config.resolve.alias = {
        '@variables': resolve('src/scss/variables.scss')
      }
      /* Run ESLINT on save */
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
