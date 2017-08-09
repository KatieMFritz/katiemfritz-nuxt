<template>
  <main role="main">
    <section class="l-container l-slice--l">
      <img src="../assets/images/katie-fritz.jpg" alt="Katie Fritz" class="a-img--portrait l-left l-top" />

      <h1>Hi, I'm Katie.</h1>
      <p>Here's what you should know about me.</p>

      <h2>I'm a geek.</h2>
      <p>Geek isn’t a bad word – it means I love to learn. These days, I mostly learn about content strategy, design systems, project management, information architecture, user experience design, and Vue.js. Earlier in my career, I’ve geeked nonprofit tech strategy, IT systems, association management, asset building policy, and housing policy. I still enjoy learning (and teaching) about all of those things.</p>

      <h2>I like people.</h2>
      <p>All of my projects put people at the center. Who visits your website? Why? How do they feel? Who has to maintain the site, and how can we make it easier? We’ll talk, a lot, and I’ll interview and observe as many people as I can to help make your website better.</p>

      <h2>I want to make an actual difference.</h2>
      <p>Like my clients, I want to make the world better, however I can. I’ve spent my whole career working in, volunteering for, and providing services to the nonprofit and education sectors. I get what it’s like to have a small tech budget, limited time, but a big mission! Together we can build your capacity so you can do more good.</p>
    </section>
    <o-past-clients/>
    <m-cta :message="cta"/>
  </main>
</template>

<script>
import pageHead from '../helpers/page-head'
import mCta from '../components/molecules/m-cta.vue'
import oPastClients from '../components/organisms/o-past-clients.vue'

export default {
  head: pageHead({
    title: 'About',
    description: 'About Katie Fritz, web developer and communications consultant at Katie M Fritz, LLC'
  }),
  data () {
    return {
      cta: 'Find out <a href="/services" title="Services">what we can do together</a>.'
    }
  },
  components: {
    'm-cta': mCta,
    'o-past-clients': oPastClients
  }
}
</script>
