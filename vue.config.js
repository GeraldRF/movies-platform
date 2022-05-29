const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  transpileDependencies: true,
  devServer: { allowedHosts: 'all', },
  pluginOptions: {
    moment: {
      locales: [
        ''
      ]
    }
  }
});
