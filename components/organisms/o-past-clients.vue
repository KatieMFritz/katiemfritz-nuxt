<template>
<section class="l-container l-slice--l">
  <h2>Previous and current clients</h2>
  <div class="m-gallery" >
    <img
      v-for="client in clients"
      class="a-img--thumbnail"
      :src="client.src"
      :alt="client.name"
      :title="client.name"
    >
  </div>
</section>
</template>

<script>
var CLIENTS = [
  {
    name: 'Community Housing Network',
    src: '/clients/chn.png'
  },
  {
    name: 'NACEDA',
    src: '/clients/naceda.png'
  },
  {
    name: 'MSU',
    src: '/clients/msu.jpg'
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
    name: 'CEDAM',
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
      clients: CLIENTS
    }
  }
}
</script>
