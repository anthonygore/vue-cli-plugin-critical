# Critical CSS Plugin for Vue CLI 3

Adds [html-critical-webpack-plugin](https://github.com/anthonygore/html-critical-webpack-plugin) to a Vue CLI project, which extracts [critical CSS](https://github.com/addyosmani/critical) and inlines it into the document head.

Any options which can be passed to HtmlCriticalPlugin can be passed to vue.config.js under the property `pluginOptions.critical` e.g.

```js
module.exports = {
    pluginOptions: {
        critical: {
            width: 375,
            height: 565    
        }
    }
}
```

#### Usage

```bash
npm i -D vue-cli-plugin-critical
npm run build ## Only runs in production mode
```
