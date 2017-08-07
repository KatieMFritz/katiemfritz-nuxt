<template>
  <main class="u-container">
    <h1>Services</h1>
    <article v-for="service in services">
      <h2>{{ service.name }}</h2>
      <section v-html="service.description"></section>
      <section>
        <h3>What you get:</h3>
        <div v-html="service.deliverables"></div>
      </section>
      <section>
        <p><strong>Price: </strong>{{ service.price }}</p>
      </section>
    </article>
  </main>
</template>

<script>
import pageHead from '../helpers/page-head'

var SERVICES = [
  {
    name: 'Sustainable Website Development',
    description: '<p>Most organizations go through a website lifecycle. Spend a lot of time and money creating a new site; launch the shiny new site; keep it updated and functional for a while; get busy and let things slide; start over. Sound familiar?</p><p>But what if you never had to go through that cycle again? With the right strategy up front and a commitment to continuous small investments, you can keep your website relevant, valuable, and fresh indefinitely.</p>',
    deliverables: '<ul><li>Web strategy package</li><li>Content coaching</li><li>Sustainable, custom-designed website on your own hosting account</li><li>Documentation and training</li></ul>',
    price: 'Starts at $6,000'
  },
  {
    name: 'Website Review Package',
    description: '<p>Are you generally happy with your website, but want to keep it fresh? I can coach your team through a website review process to clean up old content, catch features that aren’t working, improve search engine optimization, and generally revive your site. This is a great habit to do yearly – or more! After the first time, you’ll be equipped to manage future reviews on your own.</p>',
    deliverables: '<ul><li>Content inventory of your site</li><li>Document kit for website review</li><li>Weekly coaching sessions (by conference call)</li></ul>',
    price: 'Starts at $600'
  },
  {
    name: 'Web Strategy Package',
    description: '<p>Not ready for a whole new website, but want to make improvements? Need to save money by developing your site in house? This essential package will point you in the right direction. Past clients have found these tools helpful not just for marketing, but also for program delivery.</p>',
    deliverables: '<ul><li>Analytics report and custom Google Analytics dashboard</li><li>Content inventory of your current site</li><li>Channel map</li><li>Up to six persona descriptions</li><li>Up to four user journeys</li><li>Voice profile</li><li>Voice/tone/style guide template</li><li>Core content strategy statement</li></ul>',
    price: 'Starts at $2,500'
  },
  {
    name: 'Information Architecture Package',
    description: '<p>Can your users find what they need on your website, file system, wiki, or Intranet? If not, it’s getting in the way of your mission. Through user observations, card sorts, tree testing, and first click testing, I’ll refine your navigation menu or folder structure to save time and improve user experience.</p>',
    deliverables: '<ul><li>Sitemap or folder structure tailored for your organization</li></ul>',
    price: 'Starts at $600'
  },
  {
    name: 'User Testing Package',
    description: '<p>Tell me your website or app\'s goals and target audiences, and I’ll find out how it can improve.</p>',
    deliverables: '<ul><li>Three actionable recommendations for improving your website or app’s user experience (based on user testing)</li></ul>',
    price: 'Starts at $1,000'
  },
  {
    name: 'Website Coaching',
    description: '<p>If you’ve worked with me before and want a little extra help maintaining your site, no problem! We can work together by phone and/or Internet until you’re comfortable.</p>',
    deliverables: '<ul><li>Help with content creation, content revision, analytics, SEO, style guide, troubleshooting, or any other service offered above</li></ul>',
    price: '$75/hour; discounted retainers apply'
  }
]

export default {
  head: pageHead({
    title: 'Services Old'
  }),
  data () {
    return {
      services: SERVICES
    }
  }
}
</script>
