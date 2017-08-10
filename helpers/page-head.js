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
        }
      ]
    }
  }
}
