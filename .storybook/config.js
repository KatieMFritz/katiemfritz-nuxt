import { configure } from '@storybook/vue'
// import '../src/scss/global.scss'

import Vue from 'vue'

// Import your custom components.
import AArrow from '../src/components/atoms/a-arrow.vue'

// Register custom components.
Vue.component('a-arrow', AArrow)

function loadStories() {

 // You can require as many stories as you need.
 require('../src/storybook')
}

configure(loadStories, module)
