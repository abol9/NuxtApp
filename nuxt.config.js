const webpack = require('webpack');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'مقالات',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  build: {
    /*
    ** Run ESLint on save
    */
    // vendor: ['jquery', 'bootstrap'],
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'window.jQuery': 'jquery'
    //   })
    // ],
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    // "./node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css",
    "~/assets/css/fonts.css",
    "~/assets/css/main.css"
  ],
  plugins: [
    // "./node_modules/bootstrap-v4-rtl/dist/js/bootstrap.bundle.min.js"
  ]
}

