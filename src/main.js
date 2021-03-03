import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'vue-pant/lib/pant.css'
Vue.config.productionTip = false
import * as pant from '../packages/index'
Vue.use(pant);
new Vue({
  render: h => h(App),
}).$mount('#app')
