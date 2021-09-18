import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toasted from 'vue-toasted'
import GSignInButton from 'vue-google-signin-button'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false
Vue.use(toasted)
Vue.use(GSignInButton)
Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
