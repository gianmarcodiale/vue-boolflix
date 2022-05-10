import Vue from 'vue';
import App from './App.vue';
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

Vue.use(rate)
const bootstrap = require('bootstrap')
Vue.use(bootstrap)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
