// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import filters from './filter'
import '@/../static/main.css'
import filters from './filter'
import _ from 'lodash'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

// _.each(filters, function (v, k) {
//   Vue.filter(k, v)
// })

_.each(filters, (v, k) => Vue.filter(k, v))

/* 将Lodash的方法注入到Vue的filter中 */
_.each(_, (v, k) => {
  if (_.isFunction(v)) {
    Vue.filter('_' + k, (input, args) => {
      return v.apply(_, _.flatten([[input], args]))
    })
  }
})

Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
