import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
Vue.config.productionTip = false
import * as pant from '../packages/index'
// import 'vue-pant/lib/pant.css'
// import * as pant from 'vue-pant'
Vue.use(pant);
new Vue({
  render: h => h(App),
}).$mount('#app')
