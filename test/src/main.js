import Vue from 'vue'
import App from './App.vue'
import VueTouch from 'vue-touch'

Vue.use(VueTouch, {name: 'v-touch'});

VueTouch.config.swipe = {
  threshold: 100 //手指左右滑動距離
};

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

