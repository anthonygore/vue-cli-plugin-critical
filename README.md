# Critical CSS Plugin for Vue CLI 3

Adds [html-critical-webpack-plugin](https://github.com/anthonygore/html-critical-webpack-plugin) to a Vue CLI project.

Any options which can be passed to HtmlCriticalPlugin can be passed to vue.config.js under the property `pluginOptions.critical` e.g.

```
module.exports = {
    lintOnSave: false,
    pluginOptions: {
        critical: {
            width: 375,
            height: 565    
        }
    }
}
```
