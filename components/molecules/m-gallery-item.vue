<template>
<figure class="o-gallery__item" tabindex="0">
  <div class="m-figure__media">
    <img class="a-img--thumbnail" :src="src" :alt="alt">
  </div>
  <figcaption class="m-figure__caption">{{ caption }}</figcaption>
</figure>
</template>

<script>
export default {
  props: ['src', 'alt', 'caption']
}
</script>
