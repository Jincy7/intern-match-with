import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SuiVue from 'semantic-ui-vue'
import 'semantic-ui-css/semantic.css'
import {store} from './store'

Vue.config.productionTip = false;
Vue.use(SuiVue);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
