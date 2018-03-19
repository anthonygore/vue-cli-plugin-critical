const HtmlCriticalPlugin = require('html-critical-webpack-plugin');

module.exports = (api, projectOptions) => {
  api.configureWebpack(webpackConfig => {
    if (process.env.NODE_ENV === 'production') {
      const opts = Object.assign({
        base: './dist',
        src: 'index.html',
        dest: 'index.html',
        inline: true,
        minify: true,
        extract: true,
        width: 375,
        height: 565,
        penthouse: {
          blockJSRequests: false
        }
      }, projectOptions.pluginOptions.critical);
      webpackConfig.plugins.push(new HtmlCriticalPlugin(opts));
    }
  })
};
