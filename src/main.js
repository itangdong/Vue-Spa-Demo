import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import router from './router/router.js' 
import $ from 'jquery'
import store from "./store/store.js"//引入store对象
import './static/js/validate.js'
import path from './static/js/path.js';

global.path = path;

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  el: '#app',
  store,//注入到根实例中
  router,
  render: h => h(App)
})
