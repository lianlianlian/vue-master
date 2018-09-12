// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import FastClick from 'fastclick'
import md5 from 'js-md5'
import qs from 'qs'
import store from './vuex'
import router from './router'
import App from './App'
import {ToastPlugin , XInput, XButton, Tab, TabItem} from 'vux'
import VueLazyComponent from '@xunlei/vue-lazy-component'

Vue.use(ToastPlugin)
Vue.use(VueLazyComponent)
Vue.component('XInput', XInput)
Vue.component('XButton', XButton)
Vue.component('Tab', Tab)
Vue.component('TabItem', TabItem)

FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$md5 = md5
Vue.prototype.$qs = qs.stringify

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
