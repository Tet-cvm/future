import 'babel-polyfill'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import Es6Promise from 'es6-promise'
import w_App from './w_App.vue'

require('es6-promise').polyfill()
Es6Promise.polyfill()

Vue.config.productionTip = false

new Vue({
  // store,
  render: h => h(w_App)
}).$mount('#app')