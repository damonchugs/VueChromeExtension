module.exports = {
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/popup/main.js",
      title: "Popup"
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: "src/background.js"
        }
      }
    }
  },
  devServer:{
    open: true,//服务开启后直接在浏览器中打开主页面
    port: 4369,//端口号
  },
};
