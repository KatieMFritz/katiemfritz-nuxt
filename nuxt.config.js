const siteName = 'Katie M Fritz, LLC'

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    // Language
    htmlAttrs:
      { lang: 'en-US'},
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
      // Favicon
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      // Fonts
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,700,700i|Josefin+Slab:400,700,700i'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css'}
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-48626024-3' }]
  ],
  css: [
    {
      src: '~assets/css/main.css',
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
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
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
