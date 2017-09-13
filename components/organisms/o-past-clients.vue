<template>
<section class="l-container l-slice--l" role="group">
  <h2>{{ galleryTitle }}</h2>
  <div class="o-gallery" >
    <m-gallery-item
      v-for="client in clients"
      :key="client.name"
      :src="client.src"
      :alt="alt"
      :caption="client.name"
    />
  </div>
</section>
</template>

<script>
import mGalleryItem from '../molecules/m-gallery-item.vue'

var CLIENTS = [
  {
    name: 'Community Housing Network',
    src: '/clients/chn.png'
  },
  {
    name: 'NACEDA (National Alliance of Community Economic Development Associations)',
    src: '/clients/naceda.png'
  },
  {
    name: 'MSU (Michigan State University)',
    src: '/clients/msu.gif'
  },
  {
    name: 'Opportunity Resource Fund',
    src: '/clients/oppfund.jpg'
  },
  {
    name: 'Asset Independence Coalition',
    src: '/clients/aic.jpg'
  },
  {
    name: 'City Club of Portland',
    src: '/clients/ccp.png'
  },
  {
    name: 'Michigan Recycling Coalition',
    src: '/clients/mrc.png'
  },
  {
    name: 'CEDAM (Community Economic Development Association of Michigan)',
    src: '/clients/cedam.jpg'
  },
  {
    name: 'BRING Recycling',
    src: '/clients/bring-recycling.png'
  }

]

export default {
  data () {
    return {
      galleryTitle: 'Selected clients',
      alt: '',
      clients: CLIENTS
    }
  },
  components: {
    'm-gallery-item': mGalleryItem
  }
}
</script>
