const baseUrl = process.env.baseUrl
const siteName = process.env.siteName

export default options => {
  return function () {
    const url = baseUrl + this.$route.path
    const title = options.title
      ? `${options.title} | ${siteName}`
      : siteName

    return {
      // SEO
      title: title,
      meta: [
        {
          name: 'description',
          content: options.description || 'Katie Fritz makes intuitive, empowering websites for progressive organizations.'
        },
        {
          name: 'robots',
          content: options.robots || 'index, follow'
        },
        // Open Graph
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:url',
          content: url
        },
        {
          property: 'og:description',
          content: options.description || 'Katie Fritz makes intuitive, empowering websites for progressive organizations.'
        },
        {
          property: 'og:image',
          content: options.image || 'https://katiemfritz.com/images/KMF-logo-Facebook.png'
        },
        // Twitter
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: '@KatieMaeFritz'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: options.description || 'Katie Fritz makes intuitive, empowering websites for progressive organizations.'
        },
        {
          name: 'twitter:image',
          content: options.image || 'https://katiemfritz.com/images/KMF-logo-symbol-padded.png'
        },
        {
          name: 'twitter:image:alt',
          content: options.alt || 'Katie M Fritz, LLC logo'
        },
        // Icons
        {
          name: 'msapplication-config',
          content: '/icons/browserconfig.xml'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]
    }
  }
}
