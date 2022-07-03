const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
module.exports = {
  //更改vue的服务器配置
  devServer: {
    open: true,
  },
  lintOnSave: false, //关闭eslint
};
