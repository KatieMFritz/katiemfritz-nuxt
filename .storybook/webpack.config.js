// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js')

const resolve = require('path').resolve

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env)

  // Extend default config below

  /* Set aliases */
  config.resolve.alias = {
    'vue$': 'vue/dist/vue.esm.js',
    '@variables': resolve('src/scss/variables.scss')
  }

  return config;
}
