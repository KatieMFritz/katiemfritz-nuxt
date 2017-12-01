<template>

</template>

<style lang="scss">
/* // Formatting Variables
// a -> accordion container
// h -> accordion heading/toggle
// c -> accordion content/body */
$color-a: white;
$color-h: lightGray;
$color-c: white;

$type: 16px;

// Base accordion formatting
.base-a {
  display: block;
  box-sizing: border-box;
  width: 100%;
}

.base-h {
  @extend .base-a;
  margin: 0;
  padding: $type;
}

// BASIC ACCORDION STYLES
.accordion {
  @extend .base-a;
  margin: $type 0;
  border: 1px solid $color-h;
  overflow: hidden;

  & > .heading {
    @extend .base-h;
    background-color: $color-h;
    color: contrast($color-h);
    font-size: $type;
    cursor: pointer;

    & > * {
      display: inline-block;
      margin: 0;
    }
  }

  & > .content {
    @extend .base-h;
    background-color: $color-c;
    color: contrast($color-c);
    font-size: $type;
  }
}
</style>

<script>
export default {
  data () {
    return {
      components: {
        heading: {
          template: '#heading'
        },
        content: {
          template: '#content'
        }
      },
      props: {
        open: { // toggles accordion
          type: Boolean,
          default: false
        },
        id: { type: String },
        class: { type: String }
      }
    }
  }
}

// Vue.transition('slideTop',{
//   css: false,
//   enter: function(el,done){
//     $(el).hide();
//     $(el).velocity('slideDown',{duration: 700, easing: [200,12], complete: done});
//   },
//   enterCancelled: function(el){
//     $(el).stop();
//   },
//   leave: function(el,done){
//     $(el).velocity('slideUp',{duration: 350, easing: 'ease-out', complete: done});
//   },
//   leaveCancelled: function(el){
//     $(el).stop();
//   }
// });
</script>
