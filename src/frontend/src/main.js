import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'
//import '@fortawesome/fortawesome-free/css/all.css'
import Notifications from 'vue-notification'

Vue.config.productionTip = false
Vue.use(Notifications);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
