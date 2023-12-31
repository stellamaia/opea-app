import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueMask from 'v-mask';
Vue.use(VueMask); // Registre o VueMask globalmente

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
