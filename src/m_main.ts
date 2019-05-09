import 'babel-polyfill'
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/mobile/js/common.js'
import Es6Promise from 'es6-promise'
import m_App from './m_App.vue'

require('es6-promise').polyfill()
Es6Promise.polyfill()

Vue.config.productionTip = false

new Vue({
  // store,
  render: h => h(m_App)
}).$mount('#app')