const { resolve } = require('path')

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          resourceQuery: /blockType=theme/,
          loader: resolve('src/loader/vue-theme-loader.js')
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
      .use('svgo-loader')
      .loader('svgo-loader')
      .options({
        plugins: [{ removeXMLNS: true }]
      })
      .end()
  }
}
