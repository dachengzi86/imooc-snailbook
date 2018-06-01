import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // JSON 配置
    // https://developers.weixin.qq.com/miniprogram/dev/quickstart/basic/file.html#JSON-%E9%85%8D%E7%BD%AE
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    // pages: ['pages/logs/main', '^pages/index/main'],
    pages: ['^pages/books/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#EA5149',
      navigationBarTitleText: '蜗牛图书',
      navigationBarTextStyle: 'light'
    }
  }
}
